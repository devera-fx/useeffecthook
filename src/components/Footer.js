import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
      <footer>
          <h1>Copyright &copy; {today.getFullYear()}</h1>
          <p>{length} List {length === 1 ? "item" : "items"}</p>
      </footer>
  )
}

export default Footer