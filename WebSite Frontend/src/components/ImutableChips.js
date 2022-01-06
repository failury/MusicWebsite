/* eslint-disable react/prop-types */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import SuiBox from "components/SuiBox";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ImutableChips({ chipData }) {
  return (
    <SuiBox
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
        height: 40,
        flexGrow: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => (
        <ListItem key={data.id}>
          <Chip label={data.name} />
        </ListItem>
      ))}
    </SuiBox>
  );
}
