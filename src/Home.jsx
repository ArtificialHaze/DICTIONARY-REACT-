import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const search = () => {
    navigate("/dictionary");
  };

  return (
    <div style={{ position: "fixed", left: "45%", top: "30%" }}>
      <h2
        style={{
          fontSize: "50px",
          color: "#000",
          fontWeight: "bold",
          margin: "20px",
        }}
      >
        Let's EXPLORE.
      </h2>

      <Button variant="contained" onClick={search}>
        Look up
      </Button>
    </div>
  );
};

export default Home;
