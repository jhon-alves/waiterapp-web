import { useState } from 'react';
import { toast } from 'react-toastify';

import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderDialog } from '../OrderDialog';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading , setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(!isModalVisible);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} mudou para o status para ${status}!`);
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderDialog
        open={isModalVisible}
        onClose={handleCloseModal}
        order={selectedOrder}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <Board>
        <header>
          <span>{icon}</span>
          <Typography variant="subtitle2">{title}</Typography>
          <Chip size="small" className="chip" label={orders.length} />
        </header>
        {orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order, index) => (
              <button type="button" key={index} onClick={() => handleOpenModal(order)}>
                <Typography variant="subtitle1">Mesa {order.table}</Typography>
                <Chip
                  size="small"
                  className="chip"
                  label={<>{order.products.length} ite{order.products.length > 1 ? 'ns' : 'm'}</>}
                />
              </button>
            ))}
          </OrdersContainer>
        )}
      </Board>
    </>
  );
}
