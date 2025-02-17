import React, { ReactElement } from "react";
import { ProductType } from "../context/ProductProviders";
import { ReducerActionType, ReducerAction } from "../context/CardProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;

  const content = (
    <article className="flex justify-center items-center mb-3 mt-6">
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={img} alt="watch" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
              {itemInCart}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </article>
  );
  return content;
};

export default Product;
