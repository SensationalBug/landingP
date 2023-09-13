// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import AppBar from '../../../ui-component/extended/Appbar';
import HeaderSection from './HeaderSection';
import CardSection from './CardSection';
import FeatureSection from './FeatureSection';
import PeopleSection from './PeopleSection';
import FrameworkSection from './FrameworkSection';
import FooterSection from './FooterSection';
import CustomizeSection from './CustomizeSection';
import PreBuildDashBoard from './PreBuildDashBoard';
import StartupProjectSection from './StartupProjectSection';
import IncludeSection from './IncludeSection';
import RtlInfoSection from './RtlInfoSection';

// custom stlye
const HeaderWrapper = styled('div')(({ theme }) => ({
    overflowX: 'hidden',
    overflowY: 'clip',
    background:
        theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
    [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')({
    paddingTop: 100,
    paddingBottom: 100
});

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const theme = useTheme();

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home">
                <AppBar />
                <HeaderSection />
            </HeaderWrapper>

            {/* 2. card section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <CardSection />
            </SectionWrapper>

            {/* 4. Developer Experience section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <CustomizeSection />
            </SectionWrapper>

            {/* 3. about section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FeatureSection />
            </SectionWrapper>

            {/* 4. CARRUSEL */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100', textAlign: 'center', border: '1px solid black' }}>
                <div>CARRUSEL CON LAS APPS QUE HEMOS DISENADO</div>
            </SectionWrapper>

            {/* 5. people section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <PeopleSection />
            </SectionWrapper>

            {/* 6. startup section */}
            <SectionWrapper sx={{ py: 0 }}>
                <StartupProjectSection />
            </SectionWrapper>

            {/* multi-language section */}
            <SectionWrapper sx={{ py: 0 }}>
                <RtlInfoSection />
            </SectionWrapper>

            {/* framework section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default', textAlign: 'center', border: '1px solid black' }}>
                <div>PONER TODAS LAS TECNOLOGIAS QUE MANEJAMOS</div>
            </SectionWrapper>

            {/* 7. include section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <IncludeSection />
            </SectionWrapper>

            {/* footer section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default Landing;