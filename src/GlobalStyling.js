import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App'

const theme = createTheme({
    components: {
      // Name of the component ⚛️
      typography: {
        fontFamily: [
          'Rajdhani Arial Helvetica sans-serif'
        ].join(','),
      },
    },
  });

export default function GlobalStyling() {
return (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
}