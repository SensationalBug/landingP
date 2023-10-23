import { cloneElement, ReactElement, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  AppBar as MuiAppBar,
  Stack,
  Button,
  Toolbar,
  Container,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ColorContext } from "../../contexts/ColorContext";

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const { Colors }: any = useContext(ColorContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });
  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: Colors.backgroundColor,
      color: Colors.textColorPrimary,
    },
  });
}

const AppBar = ({ ...others }) => {
  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
              <div>ULTRA WEB</div>
            </Typography>
            <Stack
              direction="row"
              sx={{ display: { xs: "none", sm: "block" } }}
              spacing={{ xs: 1.5, md: 2.5 }}
            >
              <Button color="inherit" component={RouterLink} to="#">
                Proyectos
              </Button>
              <Button color="inherit" component={RouterLink} to="#">
                Que ofrecemos?
              </Button>
              <Button
                component={RouterLink}
                to="#"
                disableElevation
                variant="contained"
                color="secondary"
              >
                Contacto
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
