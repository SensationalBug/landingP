import { useMemo, useContext } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

// third party
import { motion } from "framer-motion";

// project imports
import useConfig from "../../../hooks/useConfig";

import TechLight from "../../../assets/images/landing/tech-light.svg";
import TechDark from "../../../assets/images/landing/tech-dark.svg";
import dashboard from "../../../assets/images/landing/hero-dashboard.png";
import widget1 from "../../../assets/images/landing/hero-widget-1.png";
import widget2 from "../../../assets/images/landing/hero-widget-2.png";
import BgLight from "../../../assets/images/landing/bg-hero-block-light.png";
import { ColorContext } from "../../../contexts/ColorContext";

// styles
const HeaderImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  borderRadius: 20,
  transform: "scale(1.7)",
  transformOrigin: theme.direction === "rtl" ? "100% 50%" : "0 50%",
  [theme.breakpoints.down("xl")]: {
    transform: "scale(1.5)",
  },
  [theme.breakpoints.down("lg")]: {
    transform: "scale(1.2)",
  },
}));

const HeaderAnimationImage = styled("img")({
  maxWidth: "100%",
  filter: "drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))",
});

const HeaderSection = () => {
  const theme = useTheme();
  const { rtlLayout } = useConfig();
  const { Colors }: any = useContext(ColorContext);

  const headerSX = {
    fontSize: { xs: "2rem", xl: "3.5rem" },
    color: Colors.textColorPrimary,
  };

  const HeaderAnimationImagememo = useMemo(
    () => (
      <HeaderAnimationImage
        src={BgLight}
        alt="..."
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          filter: "none",
          bottom: { md: 0 },
          right: 0,
          width: "50%",
          transformOrigin: "50% 50%",
          transform: rtlLayout ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      />
    ),
    [rtlLayout]
  );

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={5}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 30 }}
              >
                <Stack spacing={1}>
                  <Typography
                    textAlign={{ xs: "center", md: "left" }}
                    variant="h1"
                    sx={headerSX}
                  >
                    <strong style={{ color: Colors.textColorSecondary }}>
                      ULTRAWEB
                    </strong>
                  </Typography>
                  <Typography
                    textAlign={{ xs: "center", md: "left" }}
                    variant="h1"
                    color="primary"
                    sx={[headerSX]}
                  >
                    ¡La solución que estas buscando!
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ mt: -2.5, textAlign: { xs: "center", md: "left" } }}
            >
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <Typography
                  textAlign={{ xs: "center", md: "left" }}
                  color={Colors.textColorGray}
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", md: "1.125rem" } }}
                >
                  Desarrollo profesional de aplicaciones móviles y páginas web
                  al alcance de todos.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6,
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <CardMedia
                    component="img"
                    image={theme.palette.mode === "dark" ? TechDark : TechLight}
                    alt="Berry Tech"
                    sx={{ width: { xs: "75%", sm: "50%", md: "75%" } }}
                  />
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ position: "relative", mt: 8.75, zIndex: 9 }}>
            <HeaderImage src={dashboard} alt="Berry" />
            <Box
              sx={{
                position: "absolute",
                top: { md: -35, lg: -110 },
                right:
                  theme.direction === "rtl"
                    ? 170
                    : { md: -50, lg: -140, xl: -220 },
                width: { md: 220, lg: 290 },
                animation: "10s slideY linear infinite",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <HeaderAnimationImage src={widget1} alt="Berry" />
              </motion.div>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: { md: -20, lg: -90 },
                left: { md: 100, lg: 300 },
                width: { md: 220, lg: 280 },
                animation: "10s slideY linear infinite",
                animationDelay: "2s",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4,
                }}
              >
                <HeaderAnimationImage src={widget2} alt="Berry" />
              </motion.div>
            </Box>
          </Box>
          {HeaderAnimationImagememo}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderSection;
