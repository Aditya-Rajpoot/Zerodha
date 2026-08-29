import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-3wdd.onrender.com/check-auth", { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          window.location.href = "https://zerodha-frontend-dfxl.onrender.com";
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        window.location.href = "https://zerodha-frontend-dfxl.onrender.com";
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;