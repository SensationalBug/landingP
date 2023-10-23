import { ColorProvider } from "./contexts/ColorContext";
import Routes from "./routes";
import ThemeCustomization from "./themes";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <ThemeCustomization>
      <BrowserRouter>
        <ColorProvider>
          <Routes />
        </ColorProvider>
      </BrowserRouter>
    </ThemeCustomization>
  );
};

export default App;
