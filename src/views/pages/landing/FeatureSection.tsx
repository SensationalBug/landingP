// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack, CardMedia } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from '../../../ui-component/cards/SubCard';
import Avatar from '../../../ui-component/extended/Avatar';

// assets
import Offer1 from '../../../assets/images/landing/offer/offer-1.png';
import Offer2 from '../../../assets/images/landing/offer/offer-2.png';
import Offer3 from '../../../assets/images/landing/offer/offer-3.png';
import Offer4 from '../../../assets/images/landing/offer/offer-4.png';
import Offer5 from '../../../assets/images/landing/offer/offer-5.png';
import Offer6 from '../../../assets/images/landing/offer/offer-6.png';

interface OfferCardProps {
    title: string;
    caption: string;
    image: string;
}

const OfferCard = ({ title, caption, image }: OfferCardProps) => {
    const theme = useTheme();
    const AvaterSx = { background: 'transparent', color: theme.palette.secondary.main, width: 56, height: 56 };
    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
                    '&:hover': { boxShadow: 'none' },
                    height: '100%'
                }}
            >
                <Stack spacing={4}>
                    <Avatar variant="rounded" sx={AvaterSx}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" />
                    </Avatar>
                    <Stack spacing={2}>
                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            {caption}
                        </Typography>
                    </Stack>
                </Stack>
            </SubCard>
        </FadeInWhenVisible>
    );
};

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeatureSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                            What does UltraWeb offer?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer1}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer2}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer3}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer4}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer5}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Lorem ipsum dolor"
                            caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quia rerum ipsum corrupti, neque alias voluptates adipisci pariatur corporis."
                            image={Offer6}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default FeatureSection;
