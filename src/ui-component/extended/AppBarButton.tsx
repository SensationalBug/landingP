import React, { useContext } from "react";
import { Button } from "@mui/material";
import { ColorContext } from "../../contexts/ColorContext";

export const AppBarButton = ({ onClick, title }: any) => {
  const { Colors }: any = useContext(ColorContext);
  return (
    <Button
      sx={{
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.2em",
        transition: ".3s",
        "&:hover": {
          backgroundColor: "#fff",
          color: Colors.backgroundColor,
        },
      }}
      onClick={onClick}
      variant="outlined"
    >
      {title}
    </Button>
  );
};
