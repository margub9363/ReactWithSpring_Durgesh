import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <h1>Learning Code with Durgesh</h1>
      <p>
        {" "}
        This is a React practice project where the backend technology is
        Springboot.
      </p>
    </div>
  );
};

export default Home;
