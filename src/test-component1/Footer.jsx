import React from "react";
import "./styles-test.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Employee Management. All rights reserved.</p>
    </footer>
  );
};

export default Footer;