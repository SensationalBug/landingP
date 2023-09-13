import Routes from './routes';
import ThemeCustomization from './themes';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
    return (
        <ThemeCustomization>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeCustomization>
    );
};

export default App;
