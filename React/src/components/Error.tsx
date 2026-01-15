import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="container mt-4">
      <div>404 Not Found</div>
      <Link to="/">Go back to Home</Link>
      <Link to="/form">Go to Form</Link>
    </div>
  );
};

export default Error;
