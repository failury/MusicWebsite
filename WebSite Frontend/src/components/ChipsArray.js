/* eslint-disable react/prop-types */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import SuiBox from "components/SuiBox";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ chipData, setChipData }) {
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.code !== chipToDelete.code));
  };

  return (
    <SuiBox
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        height: 40,
        flexGrow: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem key={data.id}>
          <Chip label={data.name} onDelete={handleDelete(data)} />
        </ListItem>
      ))}
    </SuiBox>
  );
}
