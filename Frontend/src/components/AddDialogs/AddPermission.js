/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SuiButton from "components/SuiButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import axios from "axios";

export default function AddPermission({ callback }) {
  const [open, setOpen] = React.useState(false);
  const [perm, setPerm] = React.useState("");
  const [code, setCode] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      let Obj = {
        // eslint-disable-next-line object-shorthand
        code: code,
        // eslint-disable-next-line object-shorthand
        name: perm,
      };
      await axios.post("http://localhost:8090/permission", Obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setOpen(false);
      callback();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Fab
        color="light"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: "fixed",
          margin: 0,
          top: "auto",
          right: 40,
          bottom: 40,
          left: "auto",
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog maxWidth="xl" open={open} onClose={handleClose}>
        <DialogTitle>
          <SuiTypography variant="h6">Add User</SuiTypography>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1}>
            <Stack>
              <SuiTypography variant="caption">Permission Name</SuiTypography>
              <SuiInput
                type="text"
                value={perm}
                onChange={(event) => {
                  setPerm(event.target.value);
                }}
              />
            </Stack>
            <Stack>
              <SuiTypography variant="caption">Permission Code</SuiTypography>
              <SuiInput
                type="text"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                }}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <SuiButton onClick={handleSubmit}>Apply</SuiButton>
          <SuiButton onClick={handleClose}>Cancel</SuiButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
