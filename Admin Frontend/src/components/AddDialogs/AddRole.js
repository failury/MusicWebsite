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
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
import axios from "axios";
import ChipsArray from "components/ChipsArray";

// eslint-disable-next-line react/prop-types
export default function AddRole({ callback }) {
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  // const [role, setRole] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
    fetchpermissions();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      let permsdata = data;
      permsdata.forEach((e) => {
        delete e.code;
        delete e.name;
      });
      let Obj = {
        code,
        name,
        permissions: permsdata,
      };
      await axios.post("http://localhost:8090/role", Obj, {
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
  const fetchpermissions = async () => {
    try {
      const res = await axios.get("http://localhost:8090/permission", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(res.data);
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
          <SuiTypography variant="h6">Add Role</SuiTypography>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1}>
            <Stack>
              <SuiTypography variant="caption">Role Code</SuiTypography>
              <SuiInput
                type="text"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                }}
              />
            </Stack>
            <Stack>
              <SuiTypography variant="caption">Role Name</SuiTypography>
              <SuiInput
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Stack>
            <Stack>
              <SuiTypography variant="caption">Role Permissions</SuiTypography>
              <Stack direction="row">
                <ChipsArray chipData={data} setChipData={setData} />
                <SuiButton onClick={fetchpermissions} size="small">
                  Add all
                </SuiButton>
              </Stack>
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
