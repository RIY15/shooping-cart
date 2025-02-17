import { ChangeEvent, ReactElement, memo } from "react";
import { CartItemType } from "../context/CardProvider";
import { ReducerAction } from "../context/CardProvider";
import { ReducerActionType } from "../context/CardProvider";
import Button from "@mui/material/Button";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.qty * item.price;

  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  const content = (
    <li>
      <div className="flex lg:items-start mb-8 bg-gray-300 ml-10 mr-10 mt-6 p-5 rounded-lg">
        <img src={img} alt={item.name} className="lg:h-28 h-34" />

        <div className="flex flex-col lg:flex-row justify-between w-full pr-5 pl-5 ">
          <div aria-label="Item Name" className="font-bold lg:text-xl text-md">
            {item.name}
          </div>
          <div
            aria-label="Price Per Item"
            className="font-semibold lg:text-lg md:text-md"
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          </div>
          <div>
            <label
              htmlFor="itemQty"
              className="mr-3 font-semibold lg:text-lg text-sm"
            >
              Item Quantity
            </label>
            <select
              name="itemQty"
              id="itemQty"
              className="font-semibold lg:text-lg text-sm border rounded-lg p-1"
              value={item.qty}
              aria-label="Item Quantity"
              onChange={onChangeQty}
            >
              {options}
            </select>
          </div>

          <div
            className="font-semibold text-lg"
            aria-label="Line Item Subtotal"
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(lineTotal)}
          </div>

          <Button variant="outlined" color="error" onClick={onRemoveFromCart}>
            ❌
          </Button>
        </div>
      </div>
    </li>
  );

  return content;
};

function areItemsEqual(
  { item: prevItem }: PropsType,
  { item: nextItem }: PropsType
) {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
  CartLineItem,
  areItemsEqual
);

export default MemoizedCartLineItem;
