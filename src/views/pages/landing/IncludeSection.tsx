// material-ui
import { useTheme } from "@mui/material/styles";
import { Container, Typography, Stack, Box } from "@mui/material";

// third-party
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { ColorContext } from "../../../contexts/ColorContext";

// =============================|| LANDING - INCLUDE SECTION ||============================= //

const IncludeSection = () => {
  const theme = useTheme();
  const marqueeSX = {
    display: "flex",
    width: "100%",
    gap: 6,
    justifyContent: "space-around",
    ".MuiTypography-root": {
      fontWeight: 600,
      color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary",
      "&:hover": {
        color: theme.palette.mode === "dark" ? "text.secondary" : "grey.600",
        cursor: "pointer",
      },
    },
  };

  const margueeFirst = [
    "HTML",
    "Javascript",
    "Bootstrap",
    "Material UI",
    "React",
    "React Native",
    "Firebase",
    "Realtime Database",
    "NEXT",
  ];
  const margueeSecond = [
    "NEST",
    "MongoDB",
    "PostGre",
    "SQL Server",
    "Typeorm",
    "TypeScript Support",
    "Beautiful Design",
    "Always Updated",
  ];
  const { Colors }: any = useContext(ColorContext);

  return (
    <Box sx={{ ".overlay": { display: "none" } }}>
      <Container>
        <Stack spacing={1.25} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.125rem" },
              color: Colors.textColorPrimary,
            }}
          >
            Tecnologias que manejamos
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, color: Colors.textColorPrimary }}
            align="center"
          >
            En nuestro catálogo de tecnologias tenemos
          </Typography>
        </Stack>
      </Container>
      <Stack spacing={4} sx={{ mt: 9, direction: "initial" }}>
        <Marquee className="marquee-section">
          <Box sx={marqueeSX}>
            {margueeFirst.map((item, index) => (
              <Typography
                key={index}
                variant="h2"
                {...(index === 0 && { sx: { ml: 1 } })}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Marquee>
        <Marquee className="marquee-section" direction="right">
          <Box sx={marqueeSX}>
            {margueeSecond.map((item, index) => (
              <Typography
                key={index}
                variant="h2"
                {...(index === 0 && { sx: { ml: 5 } })}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Marquee>
      </Stack>
    </Box>
  );
};

export default IncludeSection;
