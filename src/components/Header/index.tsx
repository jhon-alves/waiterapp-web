import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from './styles';

export function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h1" className="logo">
            WAITER<span>APP</span>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
    // </>
  );
}
