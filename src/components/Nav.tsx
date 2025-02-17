import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems } = useCart();

  const button = viewCart ? (
    <Button variant="contained" onClick={() => setViewCart(false)}>
      View Products
    </Button>
  ) : (
    <button onClick={() => setViewCart(true)}>
      <IconButton>
        <ShoppingCartIcon fontSize="medium" />
        <CartBadge
          badgeContent={totalItems}
          color="primary"
          overlap="circular"
        />
      </IconButton>
    </button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};
export default Nav;
