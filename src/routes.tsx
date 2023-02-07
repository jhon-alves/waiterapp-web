import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage } from './pages/OrdersPage';

export function MyRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
