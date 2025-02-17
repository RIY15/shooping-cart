import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HistoryIcon from "@mui/icons-material/History";
import React, { useState, useEffect } from "react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const location = useLocation(); // 🔥 Ambil lokasi saat ini
  const [value, setValue] = useState(0);

  // 🔹 Efek untuk sinkronisasi dengan URL
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/order-history") {
      setValue(1);
    }
  }, [location.pathname]);

  return (
    <header>
      <div className="flex justify-between p-4 bg-slate-300 items-center">
        <h1 className="font-mono text-3xl font-extrabold">Acme Co.</h1>
        <div className="relative flex items-center gap-4">
          <Box sx={{ width: 280, borderRadius: "20px" }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeOutlinedIcon />}
                component={Link}
                to="/" // ✅ Navigasi ke Home
              />
              <BottomNavigationAction
                label="Order History"
                icon={<HistoryIcon />}
                component={Link}
                to="/order-history" // ✅ Navigasi ke Order History
              />
            </BottomNavigation>
          </Box>

          <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
