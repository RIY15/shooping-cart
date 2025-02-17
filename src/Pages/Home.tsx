import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import { useState } from "react";

const Home = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <div className="relative min-h-screen">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <div className="absolute bottom-0 w-full">
        <Footer viewCart={viewCart} />
      </div>
    </div>
  );

  return content;
};

export default Home;
