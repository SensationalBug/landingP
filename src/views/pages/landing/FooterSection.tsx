import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const FooterSection = () => {
  return (
    <Box sx={{ bgcolor: "dark.dark", py: { xs: 3, sm: 1.5 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 1.5, sm: 1, md: 3 }}
        >
          <Typography color="#fff" fontSize={"1.2em"}>
            © UltraWeb is managed by Pedro Luis De Leon Alejo
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 3, sm: 1.5, md: 2 }}
          >
            <IconButton
              size="small"
              aria-label="UltraWeb Blog"
              component={Link}
              href="#"
            >
              <PublicIcon
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "error.main" },
                }}
              />
            </IconButton>
            <IconButton
              size="small"
              aria-label="codedTheme Twitter"
              component={Link}
              href="#"
            >
              <TwitterIcon
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              />
            </IconButton>
            <IconButton
              size="small"
              aria-label="codedTheme Dribble"
              component={Link}
              href="#"
            >
              <SportsBasketballIcon
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "warning.main" },
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSection;
