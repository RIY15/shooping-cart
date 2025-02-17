import { createContext, useReducer, ReactElement } from "react";
import { CartItemType } from "./CardProvider";

export type OrderType = {
  id: number;
  items: CartItemType[];
  totalPrice: string;
};

type OrderHistoryStateType = {
  orders: OrderType[];
};

const initOrderHistoryState: OrderHistoryStateType = {
  orders: [],
};

const ORDER_ACTIONS = {
  ADD_ORDER: "ADD_ORDER",
};

type OrderAction = {
  type: string;
  payload?: OrderType;
};

const orderHistoryReducer = (
  state: OrderHistoryStateType,
  action: OrderAction
): OrderHistoryStateType => {
  switch (action.type) {
    case ORDER_ACTIONS.ADD_ORDER: {
      if (!action.payload) {
        throw new Error("Payload missing in ADD_ORDER action");
      }
      return { orders: [...state.orders, action.payload] };
    }
    default:
      throw new Error("Unknown action type");
  }
};

const OrderHistoryContext = createContext<{
  orders: OrderType[];
  addOrder: (order: OrderType) => void;
}>({
  orders: [],
  addOrder: () => {},
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const OrderHistoryProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(
    orderHistoryReducer,
    initOrderHistoryState
  );

  const addOrder = (order: OrderType) => {
    dispatch({ type: ORDER_ACTIONS.ADD_ORDER, payload: order });
  };

  return (
    <OrderHistoryContext.Provider value={{ orders: state.orders, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

export default OrderHistoryContext;
