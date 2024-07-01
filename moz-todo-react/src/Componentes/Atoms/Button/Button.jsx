import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="view-now-button" onClick={() => window.location.href = props.link}>Ver ahora</button>
    </>
  );
};

export default Button;
