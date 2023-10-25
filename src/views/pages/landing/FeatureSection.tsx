// material-ui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, Stack, CardMedia } from "@mui/material";

// project imports
import FadeInWhenVisible from "./Animation";
import SubCard from "../../../ui-component/cards/SubCard";
import Avatar from "../../../ui-component/extended/Avatar";

// assets
import Offer1 from "../../../assets/images/landing/offer/offer-1.png";
import Offer2 from "../../../assets/images/landing/offer/offer-2.png";
import Offer3 from "../../../assets/images/landing/offer/offer-3.png";
import Offer4 from "../../../assets/images/landing/offer/offer-4.png";
import Offer5 from "../../../assets/images/landing/offer/offer-5.png";
import Offer6 from "../../../assets/images/landing/offer/offer-6.png";
import { useContext } from "react";
import { ColorContext } from "../../../contexts/ColorContext";

interface OfferCardProps {
  title: string;
  caption: string;
  image: string;
}

const OfferCard = ({ title, caption, image }: OfferCardProps) => {
  const theme = useTheme();
  const AvaterSx = {
    background: "transparent",
    color: theme.palette.secondary.main,
    width: 56,
    height: 56,
  };
  return (
    <FadeInWhenVisible>
      <SubCard
        sx={{
          bgcolor: theme.palette.mode === "dark" ? "dark.800" : "grey.100",
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.divider,
          "&:hover": { boxShadow: "none" },
          height: "100%",
        }}
      >
        <Stack spacing={4}>
          <Avatar variant="rounded" sx={AvaterSx}>
            <CardMedia
              component="img"
              src={image}
              alt="Beautiful User Interface"
            />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              {caption}
            </Typography>
          </Stack>
        </Stack>
      </SubCard>
    </FadeInWhenVisible>
  );
};

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeatureSection = () => {
  const { Colors }: any = useContext(ColorContext);
  return (
    <Container>
      <Grid container spacing={7.5} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2.125rem" },
                  color: Colors.textColorPrimary,
                  textTransform: "uppercase",
                }}
              >
                Que ofrece UltraWeb?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                sx={{ color: Colors.textColorPrimary, fontSize: "1rem" }}
              >
                Poseemos un amplio conocimiento a muchas tecnologias, con lo
                cual podremos hacer cualquier solicitud que te imagines
                realidad.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={5}
            sx={{ "&> .MuiGrid-root > div": { height: "100%" } }}
          >
            <Grid item md={4} sm={6}>
              <OfferCard
                title="API"
                caption="Desarrolamos la API que necesites para tu negocio, implementando buenas practicas y excelentes tecnologias."
                image={Offer1}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <OfferCard
                title="Aplicaciones Mobiles"
                caption="Con el uso de React Native haremos posible esa idea de aplicación que posees, ya sea que quieras llevar tu negocio contigo siempre."
                image={Offer2}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <OfferCard
                title="Sitio WEB"
                caption="Podemos hacer que tu negocio pueda mostrarse a mas personas con un sitio web que los represente."
                image={Offer3}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <OfferCard
                title="Aplicaciones WEB"
                caption="Si lo que necesitas es un software que se ejecute en la nube, ultraweb es el lugar indicado para ti."
                image={Offer4}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <OfferCard
                title="Asesorias"
                caption="Impartimos asesorias en cuanto a que deberias tener para mostrar tu informacion en internet."
                image={Offer5}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <OfferCard
                title="Mucho mas"
                caption="Cualquier idea que puedas tener, no te preocupes nosotros podemos crearla para ti."
                image={Offer6}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
