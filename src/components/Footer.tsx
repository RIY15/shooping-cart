type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  // const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shooping Cart &copy; {year}</p>
  ) : (
    <>
      {/* <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p> */}
      {/* <p>Shooping Car &copy; {year}</p> */}
    </>
  );

  const content = <footer className="">{pageContent}</footer>;

  return content;
};

export default Footer;
