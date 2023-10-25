import { cloneElement, ReactElement, useContext } from "react";

import {
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Container,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ColorContext } from "../../contexts/ColorContext";
import { AppBarButton } from "./AppBarButton";

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
  const { Colors }: any = useContext(ColorContext);
  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
            <Typography
              component="div"
              onClick={() => others.scrollToMain()}
              sx={{
                flexGrow: 1,
                textAlign: "left",
                cursor: "pointer",
                fontSize: "2em",
                fontWeight: "bold",
                transition: ".3s",
                "&:hover": {
                  color: Colors.textColorSecondary,
                },
              }}
            >
              ULTRA WEB
            </Typography>
            <Stack
              direction="row"
              sx={{ display: { xs: "none", sm: "block" } }}
              spacing={{ xs: 1.5, md: 3.5 }}
            >
              <AppBarButton
                title="Proyectos"
                onClick={() => others.scrollToProjects()}
              />
              <AppBarButton
                title="Que ofrecemos?"
                onClick={() => others.scrollToProducts()}
              />
              <AppBarButton
                title="Contacto"
                onClick={() => others.scrollToContact()}
              />
            </Stack>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
