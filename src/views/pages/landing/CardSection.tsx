// material-ui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, Stack } from "@mui/material";

// project imports
import FadeInWhenVisible from "./Animation";
import SubCard from "../../../ui-component/cards/SubCard";
import Avatar from "../../../ui-component/extended/Avatar";

// assets
import GridViewIcon from "@mui/icons-material/GridView";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import { useContext } from "react";
import { ColorContext } from "../../../contexts/ColorContext";

// =============================|| LANDING - CARD SECTION ||============================= //

const CardSection = () => {
  const theme = useTheme();
  const { Colors }: any = useContext(ColorContext);
  const cardSX = {
    overflow: "hidden",
    position: "relative",
    border: "none",
    "&:after": {
      content: '""',
      position: "absolute",
      width: 150,
      height: 150,
      border: `35px solid ${theme.palette.background.paper}`,
      opacity: theme.palette.mode === "dark" ? 0.1 : 0.4,
      borderRadius: "50%",
      top: -72,
      right: -63,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: 150,
      height: 150,
      border: `2px solid ${theme.palette.background.paper}`,
      opacity: theme.palette.mode === "dark" ? 0.05 : 0.21,
      borderRadius: "50%",
      top: -97,
      right: -3,
    },
    "& .MuiCardContent-root": {
      padding: "20px 38px 20px 30px",
    },
  };
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 3, sm: 5 }}
        sx={{ textAlign: "center" }}
      >
        <Grid item md={4} sm={6} xs={12}>
          <FadeInWhenVisible>
            <SubCard sx={{ bgcolor: "warning.main", ...cardSX }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    background: theme.palette.background.paper,
                    color: Colors.backgroundColor,
                    opacity: 1,
                    height: 60,
                    width: 60,
                    borderRadius: "12px",
                  }}
                >
                  <GridViewIcon
                    sx={{ fontSize: "2.25rem", transform: "rotate(45deg)" }}
                  />
                </Avatar>
                <Stack alignItems="flex-end">
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: "1rem",
                      zIndex: "99",
                      color: Colors.backgroundColor,
                    }}
                  >
                    Comienza Tu Proyecto Digital Hoy Mismo
                  </Typography>
                </Stack>
              </Stack>
            </SubCard>
          </FadeInWhenVisible>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <FadeInWhenVisible>
            <SubCard sx={{ bgcolor: theme.palette.primary[200], ...cardSX }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    background: theme.palette.background.paper,
                    color: Colors.backgroundColor,
                    opacity: 1,
                    height: 60,
                    width: 60,
                    borderRadius: "12px",
                  }}
                >
                  <WidgetsOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                </Avatar>
                <Stack alignItems="flex-end">
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: "1rem",
                      zIndex: "99",
                      color: Colors.backgroundColor,
                    }}
                  >
                    Solicita una Consulta Gratuita
                  </Typography>
                </Stack>
              </Stack>
            </SubCard>
          </FadeInWhenVisible>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <FadeInWhenVisible>
            <SubCard sx={{ bgcolor: theme.palette.secondary[200], ...cardSX }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    background: theme.palette.background.paper,
                    color: Colors.backgroundColor,
                    opacity: 1,
                    height: 60,
                    width: 60,
                    borderRadius: "12px",
                  }}
                >
                  <WebOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                </Avatar>
                <Stack alignItems="flex-end">
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: "1rem",
                      zIndex: "99",
                      color: Colors.backgroundColor,
                    }}
                  >
                    Obtén un Presupuesto Personalizado
                  </Typography>
                </Stack>
              </Stack>
            </SubCard>
          </FadeInWhenVisible>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardSection;
