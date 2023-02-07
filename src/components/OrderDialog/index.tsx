import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle, DialogContent, DialogActions } from './styles';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderDialogProps {
  open: boolean;
  onClose: () => void;
  order: Order | null;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderDialog({ open, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderDialogProps) {

  if (!open || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  // let total = 0;
  // order.products.forEach(({ product, quantity }) => {
  //   total += product.price * quantity;
  // });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        <strong>Mesa {order.table}</strong>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box className="status-container">
          <small>Status do pedido</small>
          <Box>
            <span>
              {order.status === 'WAITING' && '🕛'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </Box>
        </Box>
        <Box className="order-details">
          <strong>Items</strong>
          <Box className="order-items">
            {order?.products.map(({ product, quantity }, index) => (
              <Box className="item" key={index}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>

                <Box className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          className="primary"
          variant="contained"
          disabled={isLoading}
          onClick={onChangeOrderStatus}
        >
          <span>👨‍🍳</span>
          <strong>
            {order.status === 'WAITING' && 'Iniciar Produção' }
            {order.status === 'IN_PRODUCTION' && 'Concluir pedido' }
          </strong>
        </Button>

        <Button
          fullWidth
          className="secondary"
          variant="outlined"
          disabled={isLoading}
          onClick={onCancelOrder}
        >
          <strong>Cancelar pedido</strong>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
