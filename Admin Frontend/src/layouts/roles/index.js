/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import SuiInput from "components/SuiInput";

// MUI components
import * as React from "react";
import SuiButton from "components/SuiButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";
import AddRole from "components/AddDialogs/AddRole";
import ImutableChips from "components/ImutableChips";
import ChipsArray from "components/ChipsArray";

function Roles() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [perms, setPerms] = React.useState([]);
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [id, setId] = React.useState(0);
  const handleClickOpen = (c, n, p, i) => {
    setName(n);
    setCode(c);
    setId(i);
    setPerms(p);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (i) => {
    try {
      const res = await axios.delete(`http://localhost:8090/role/${i}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data === true) {
        fetchData();
      }
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
      setPerms(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    try {
      const permissions = perms;
      permissions.forEach((e) => {
        delete e.code;
        delete e.name;
      });
      const Obj = {
        id,
        name,
        code,
        permissions,
      };
      const res = await axios.put(`http://localhost:8090/role/`, Obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data === true) {
        fetchData();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async function f() {
    try {
      const res = await axios.get("http://localhost:8090/role", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const obj = res.data;
      obj.forEach((e) => {
        e.action = (
          <Stack direction="row" spacing={2}>
            <SuiTypography
              component="a"
              href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
              onClick={() => handleClickOpen(e.code, e.name, e.p, e.id)}
            >
              Edit
            </SuiTypography>
            <SuiTypography
              component="a"
              href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </SuiTypography>
          </Stack>
        );
        e.p = e.permissions;
        e.permissions = <ImutableChips chipData={e.permissions} />;
      });
      setData(obj);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    { name: "code", align: "center" },
    { name: "name", align: "center" },
    { name: "permissions", align: "center" },
    { name: "action", align: "center" },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddRole callback={fetchData} />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Roles</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={data} />
              <Dialog maxWidth="xl" open={open} onClose={handleClose}>
                <DialogTitle>
                  <SuiTypography variant="h6">Edit User</SuiTypography>
                </DialogTitle>
                <DialogContent>
                  <Stack direction="row" spacing={1}>
                    <Stack>
                      <SuiTypography variant="caption">Role Code</SuiTypography>
                      <SuiInput
                        type="text"
                        placeholder="role code"
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
                        placeholder="role name"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </Stack>
                    <Stack>
                      <SuiTypography variant="caption">Role Permissions</SuiTypography>
                      <Stack direction="row">
                        <ChipsArray chipData={perms} setChipData={setPerms} />
                        <SuiButton onClick={fetchpermissions} size="small">
                          Add all
                        </SuiButton>
                      </Stack>
                    </Stack>
                  </Stack>
                </DialogContent>
                <DialogActions>
                  <SuiButton onClick={() => handleUpdate()}>Save</SuiButton>
                  <SuiButton onClick={handleClose}>Cancel</SuiButton>
                </DialogActions>
              </Dialog>
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Roles;
