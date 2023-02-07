import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { GridContainer } from './styles';

interface BacknavProps {
  title: string;
}

export function Backnav({ title }: BacknavProps) {
  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Typography variant="h3">{title}</Typography>
        </Container>
      </Grid>
    </GridContainer>
  );
}
