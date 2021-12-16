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
import AddUser from "components/AddUser";

function Users() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8090/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data === true) {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async function f() {
    try {
      const res = await axios.get("http://localhost:8090/user", {
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
              onClick={handleClickOpen}
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
    { name: "username", align: "center" },
    { name: "password", align: "center" },
    { name: "role", align: "center" },
    { name: "action", align: "center" },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddUser />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Users</SuiTypography>
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
                      <SuiTypography variant="caption">Username</SuiTypography>
                      <SuiInput type="text" placeholder="username" />
                    </Stack>
                    <Stack>
                      <SuiTypography variant="caption">Password</SuiTypography>
                      <SuiInput type="password" placeholder="password" />
                    </Stack>
                    {/* <Stack>
                      <SuiTypography variant="caption">First Name</SuiTypography>
                      <SuiInput type="text" placeholder="first name" />
                    </Stack>
                    <Stack>
                      <SuiTypography variant="caption">Last Name</SuiTypography>
                      <SuiInput type="text" placeholder="last name" />
                    </Stack>
                    <Stack>
                      <SuiTypography variant="caption">Email Address</SuiTypography>
                      <SuiInput type="email" placeholder="email address" />
                    </Stack> */}
                    <Stack>
                      <SuiTypography variant="caption">Role</SuiTypography>
                      <SuiInput type="text" placeholder="user role" />
                    </Stack>
                  </Stack>
                </DialogContent>
                <DialogActions>
                  <SuiButton onClick={handleClose}>Save</SuiButton>
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

export default Users;
