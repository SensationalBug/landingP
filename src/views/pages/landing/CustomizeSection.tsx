// material-ui
import { useTheme } from "@mui/material/styles";
import { CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

import LayerLeft from "../../../assets/images/Solar.png";
import LayerRight from "../../../assets/images/Wallet.png";
import { ColorContext } from "../../../contexts/ColorContext";

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
  const theme = useTheme();
  const { Colors }: any = useContext(ColorContext);
  const listSX = {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    padding: "10px 0",
    fontSize: "1rem",
    color: Colors.textColorPrimary,
    svg: { color: theme.palette.secondary.main },
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}
        sx={{
          backgroundColor: Colors.backgroundColor,
        }}
      >
        <Grid item xs={12} md={6} sx={{ img: { width: "100%" } }}>
          <Stack sx={{ width: "75%", mb: 5, mx: "auto" }}>
            <CardMedia component="img" image={LayerLeft} alt="Layer" />
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid>
            <Grid item xs={12}>
              <a
                target="_blank"
                href="https://tech-2f51a.web.app/encuesta/3"
                rel="noreferrer"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2.125rem" },
                    mb: 2,
                    color: Colors.textColorPrimary,
                    transition: ".3s",
                    "&:hover": {
                      color: Colors.textColorSecondary,
                    },
                  }}
                >
                  Solar Poll - Encuestas
                </Typography>
              </a>
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{
                  fontSize: "1rem",
                  zIndex: "99",
                  width: { xs: "100%", sm: "100%", md: "calc(100% - 20%)" },
                  color: Colors.textColorPrimary,
                }}
              >
                Desarrollo personalizado para un cliente que necesitaba una
                pagina para mandar encuestas a sus clientes, y necesitaba el
                maximo nivel de personalización.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: Colors.textColorPrimary,
                  marginTop: 2,
                }}
              >
                Herramientas utilizadas.
              </Typography>
              <Typography sx={listSX}>React.</Typography>
              <Typography sx={listSX}>Material UI.</Typography>
              <Typography sx={listSX}>Firebase realtime database.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2.5}
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid item xs={12} md={6}>
              <Grid container spacing={2.5}>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 2,
                      color: Colors.textColorPrimary,
                      fontSize: { xs: "1.5rem", sm: "2.125rem" },
                    }}
                  >
                    Wallet ITopia
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{
                      zIndex: "99",
                      fontSize: "1rem",
                      color: Colors.textColorPrimary,
                      width: { xs: "100%", md: "calc(100% - 20%)" },
                    }}
                  >
                    Aplicación de registro de gastos destinada a mantener un
                    control de los gastos que se tienen.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      color: Colors.textColorPrimary,
                      marginTop: 2,
                    }}
                  >
                    Herramientas utilizadas.
                  </Typography>
                  <ul>
                    <Typography sx={listSX}>React Native</Typography>
                    <Typography sx={listSX}>Material UI</Typography>
                    <Typography sx={listSX}>NestJS - Backend</Typography>
                    <Typography sx={listSX}>RailWay - Hosting API</Typography>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ img: { width: "100%" } }}>
              <Stack sx={{ width: "70%", mx: "auto" }}>
                <CardMedia component="img" image={LayerRight} alt="Layer" />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomizeSection;
