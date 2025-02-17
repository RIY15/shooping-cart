import { useContext } from "react";
import OrderHistoryContext from "../context/OrderHistoryProvider";

const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);

  if (!context) {
    throw new Error(
      "useOrderHistory must be used within an OrderHistoryProvider"
    );
  }

  return context;
};

export default useOrderHistory;
