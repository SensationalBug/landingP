import { cloneElement, useState, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from '../../ui-component/Logo';

// assets
import MenuIcon from '@mui/icons-material/Menu';

// elevation scroll
interface ElevationScrollProps {
    children: ReactElement;
    window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
    const theme = useTheme();
    // theme.palette.mode = "dark";
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window!
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: theme.palette.text.dark
        }
    });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState<boolean>(false);

    const drawerToggler = (open: boolean) => (event: any) => {
        if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            {/* <Logo /> */}
                            <div>ULTRA WEB</div>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
                            <Button color="inherit" component={Link} href="/">
                                Home
                            </Button>
                            <Button color="inherit" component={RouterLink} to="#" >
                                Dashboard
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/contact" >
                                Contacto
                            </Button>
                            <Button color="inherit" component={Link} href="#" >
                                Documentation
                            </Button>
                            <Button
                                component={Link}
                                href="#"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Purchase Now
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#" >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <div>Icono</div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="/login" >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <div>Icono</div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dashboard" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="#"

                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <div>Icono</div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Documentation" />
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                href="#"

                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <div>Icono</div>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Purchase Now" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
