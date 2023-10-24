import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// material-ui
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

// third-party
import { PatternFormat } from "react-number-format";

// project imports
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { gridSpacing } from "../../../store/constant";
import { ColorContext } from "../../../contexts/ColorContext";

// select options
const currencies = [
  {
    value: "1",
    label: "USD$1000",
  },
  {
    value: "2",
    label: "USD$1000 - USD$3000",
  },
  {
    value: "3",
    label: "No especificar",
  },
];

const ContactCard = () => {
  const { Colors }: any = useContext(ColorContext);

  const [budget, setBudget] = useState(1);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBudget(Number(event.target?.value!));
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ backgroundColor: Colors.backgroundColor }}
      spacing={gridSpacing}
    >
      <Grid container sx={{ justifyContent: "center", marginTop: "30px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2.125rem" },
            color: Colors.textColorPrimary,
          }}
        >
          Contáctanos
        </Typography>
      </Grid>
      <Grid item xs={10} sx={{}}>
        <Card sx={{ mb: 6.25 }} elevation={12}>
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Nombre completo</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="Nombre completo"
                    placeholder="Ingresa tu nombre"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Correo Electrónico</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="Correo Electrónico"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <PatternFormat
                    format="+1 (###) ###-####"
                    mask="_"
                    fullWidth
                    customInput={TextField}
                    label="Número"
                    placeholder="Ingresa tu número"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{ textAlign: "left" }}>
                  <TextField
                    id="outlined-select-budget"
                    select
                    fullWidth
                    label="Presupuesto"
                    value={budget}
                    onChange={handleChange}
                  >
                    {currencies.map((option, index) => (
                      <MenuItem key={index} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-multiline-static1"
                    placeholder="Mensaje"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm zeroMinWidth>
                    <Typography align="left" variant="body2">
                      Al enviar esta informacion estas de acuerdo con nuestra
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        color="primary"
                        sx={{ mx: 0.5 }}
                      >
                        Politica de privacidad
                      </Typography>
                      y
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        color="primary"
                        sx={{ ml: 0.5 }}
                      >
                        Politicas de cookies
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button variant="contained" color="secondary">
                        Contactanos
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactCard;
