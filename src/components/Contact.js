import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    return navigate("/");
  };
  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Submit Form</button>
      <Outlet />
    </>
  );
};

export default Contact;
