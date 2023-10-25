import { Box, Container, Stack, Typography } from "@mui/material";

const FooterSection = () => {
  return (
    <Box sx={{ bgcolor: "dark.dark", py: { xs: 3, sm: 1.5 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 1.5, sm: 1, md: 3 }}
        >
          <Typography color="#fff" fontSize={"1.2em"}>
            © UltraWeb is managed by Pedro DL y Daniel GM
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSection;
