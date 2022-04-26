import Main from './Main'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Rajdhani'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
