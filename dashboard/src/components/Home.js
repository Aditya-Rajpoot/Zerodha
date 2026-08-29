import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/check-auth", { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          window.location.href = "http://localhost:3000";
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000";
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