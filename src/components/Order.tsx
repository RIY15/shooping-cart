import useOrderHistory from "../hooks/useOrderHistory";
import { Typography } from "@mui/material";

const OrderHistory = () => {
  const { orders } = useOrderHistory();

  return (
    <div className="p-5">
      <Typography variant="h5" className="mb-4">
        Order History
      </Typography>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="border p-4 mb-4 rounded-lg">
              <p className="font-bold">Order #{order.id}</p>
              <p>Total Price: {order.totalPrice}</p>
              <ul className="mt-2">
                {order.items.map((item) => (
                  <li key={item.sku} className="flex justify-between">
                    <span>
                      {item.name} (x{item.qty})
                    </span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
