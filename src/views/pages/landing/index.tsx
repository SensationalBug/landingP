// material-ui
import { useTheme, styled } from "@mui/material/styles";

// project imports
import AppBar from "../../../ui-component/extended/Appbar";
import HeaderSection from "./HeaderSection";
import CardSection from "./CardSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import CustomizeSection from "./CustomizeSection";
import IncludeSection from "./IncludeSection";
import RtlInfoSection from "./RtlInfoSection";

// custom stlye
const HeaderWrapper = styled("div")(({ theme }) => ({
  overflowX: "hidden",
  overflowY: "clip",
  background: theme.palette.dark.dark,
  [theme.breakpoints.down("md")]: {},
}));

const SectionWrapper = styled("div")({
  paddingTop: 100,
  paddingBottom: 100,
});

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme().palette.dark.dark;

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      {/* 2. card section */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <CardSection />
      </SectionWrapper>

      {/* 3. Developer Experience section */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <CustomizeSection />
      </SectionWrapper>

      {/* 4. about section */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <FeatureSection />
      </SectionWrapper>

      {/* 5. CARRUSEL */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <div>CARRUSEL CON LAS APPS QUE HEMOS DISENADO</div>
      </SectionWrapper>

      {/* multi-language section */}
      <SectionWrapper sx={{ py: 0 }}>
        <RtlInfoSection />
      </SectionWrapper>

      {/* 7. include section */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <IncludeSection />
      </SectionWrapper>

      {/* footer section */}
      <FooterSection />
    </>
  );
};

export default Landing;
