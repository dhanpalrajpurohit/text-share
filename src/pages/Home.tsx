import { Container } from '../components';
import { createTheme, ThemeProvider } from "@mui/material/styles";


function Home() {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  )
}

export default Home
