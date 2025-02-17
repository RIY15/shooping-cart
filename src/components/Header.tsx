import Nav from "./Nav";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header>
      <div className="flex justify-between p-4 bg-slate-300 items-center">
        <h1 className="font-mono text-3xl font-extrabold">Acme Co.</h1>
        <div className="relative flex items-center gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/order-history"}>Order</Link>
          <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </div>
      </div>
    </header>
  );

  return content;
};
export default Header;
