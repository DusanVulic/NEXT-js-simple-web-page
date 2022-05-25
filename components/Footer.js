import React from "react";

const Footer = () => {
  // date-year
  const year = new Date().getFullYear();
  //
  return <footer> copyright paperFox {year} </footer>;
};

export default Footer;
