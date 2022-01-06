/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MusicCard from "examples/Cards/MusicCards/TransparentBlogCard";
// Overview page components
import Header from "layouts/home/components/Header";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SuiBox mt={5} mb={3} />
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Songs
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <MusicCard
                  image="https://bit.ly/3owfxsM"
                  title="Eye of the tiger"
                  description=""
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "",
                  }}
                />
              </Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Overview;
