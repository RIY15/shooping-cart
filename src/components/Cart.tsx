import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import Button from "@mui/material/Button";
import "@fontsource/roboto/500.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useOrderHistory from "../hooks/useOrderHistory";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const navigate = useNavigate();
  const { addOrder, orders } = useOrderHistory();
  const idItem: number = 0;

  const onSubmitOrder = () => {
    if (cart.length > 0) {
      // Buat data order baru
      const newOrder = {
        id: orders.length + 1, // ID unik berdasarkan timestamp
        items: cart,
        totalPrice: totalPrice,
      };

      addOrder(newOrder); // Simpan order ke riwayat pesanan
      dispatch({ type: REDUCER_ACTIONS.SUBMIT }); // Kosongkan cart
      setConfirm(true);
      navigate("/order-history"); // Navigasi ke riwayat pesanan
    }
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <div className=" pb-30">
      <Typography variant="h5" className="p-2 pt-4">
        Shopping Cart
      </Typography>
      <ul>
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div className="bg-slate-300 flex justify-end m-10 p-3 rounded-lg absolute bottom-0 right-0">
        <div className="mr-3 text-lg">
          <p>
            Total Items: <span className="font-bold text-xl">{totalItems}</span>
          </p>
          <p>
            Total Price: <span className="font-bold text-xl">{totalPrice}</span>
          </p>
        </div>

        <Button
          className="rounded-lg"
          variant="contained"
          color="success"
          onClick={onSubmitOrder}
          disabled={!totalItems}
        >
          Checkout
        </Button>
      </div>
    </div>
  );

  return <main>{pageContent}</main>;
};

export default Cart;
