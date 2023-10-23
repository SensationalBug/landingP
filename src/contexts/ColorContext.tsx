import { createContext, ReactNode } from "react";
import { useTheme } from "@mui/material";

const ColorContext = createContext({});

type props = {
  children: ReactNode;
};

function ColorProvider({ children }: props) {
  const theme = useTheme();
  const Colors = {
    backgroundColor: theme.palette.dark[800],
    textColorPrimary: (theme.palette.background.paper = "#fff"),
    textColorSecondary: (theme.palette.background.paper = "#1e89e5"),
    textColorGray: (theme.palette.background.paper = "#A1A1A1"),
  };

  return (
    <ColorContext.Provider value={{ Colors }}>{children}</ColorContext.Provider>
  );
}

export { ColorProvider, ColorContext };
