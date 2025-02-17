import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OrderHistory from "./Pages/OrderHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-history" element={<OrderHistory />} />
    </Routes>
  );
}

export default App;
