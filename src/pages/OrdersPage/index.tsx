import Container from '@mui/material/Container';
import { Orders } from '../../components/Orders';
import { Backnav } from '../../components/Backnav';

export function OrdersPage() {
  return (
    <>
      <Backnav title="Acompanhe os pedidos" />
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Orders />
      </Container>
    </>
  );
}
