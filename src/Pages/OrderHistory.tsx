import Header from "../components/Header";
import Cart from "../components/Cart";
import { useState } from "react";
import Order from "../components/Order";

const OrderHistory = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContent = viewCart ? <Cart /> : <Order />;

  return (
    <div>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
    </div>
  );
};

export default OrderHistory;
