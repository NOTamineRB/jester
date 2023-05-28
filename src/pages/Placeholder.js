import React from "react";

const Placeholder = ({ pageName }) => {
  return (
    <div>
      <h2>{pageName}</h2>
      <p>This is the {pageName} page.</p>
    </div>
  );
};

export default Placeholder;
