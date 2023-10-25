// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { useRef } from "react";
// project imports
import AppBar from "../../../ui-component/extended/Appbar";
import HeaderSection from "./HeaderSection";
import CardSection from "./CardSection";
import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import CustomizeSection from "./CustomizeSection";
import IncludeSection from "./IncludeSection";
import ContactCard from "../contact-us/ContactCard";

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
  const main: any = useRef(null);
  const projects: any = useRef(null);
  const products: any = useRef(null);
  const contact: any = useRef(null);

  const scrollToProjects = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper ref={main} id="home">
        <AppBar
          scrollToMain={() => scrollToProjects(main)}
          scrollToProjects={() => scrollToProjects(projects)}
          scrollToProducts={() => scrollToProjects(products)}
          scrollToContact={() => scrollToProjects(contact)}
        />
        <HeaderSection />
      </HeaderWrapper>

      {/* 2. card section */}
      <SectionWrapper sx={{ bgcolor: theme }}>
        <CardSection />
      </SectionWrapper>

      {/* 3. Developer Experience section */}
      <SectionWrapper ref={projects} sx={{ bgcolor: theme }}>
        <CustomizeSection />
      </SectionWrapper>

      {/* 4. about section */}
      <SectionWrapper ref={products} sx={{ bgcolor: theme }}>
        <FeatureSection />
      </SectionWrapper>

      {/* multi-language section */}
      <SectionWrapper ref={contact} sx={{ bgcolor: theme }}>
        <ContactCard />
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
