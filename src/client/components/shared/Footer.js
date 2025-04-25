import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d3b66",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        position: "relative", 
        bottom: "0",
        width: "100%",
        marginTop: "40px", 
      }}
    >
      <p
        style={{
          margin: "0",
          fontSize: "1rem",
        }}
      >
        &copy; {new Date().getFullYear()} Health Information System. All Rights
        Reserved.
      </p>
      <div>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "1.2rem",
          }}
        >
          Facebook
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "1.2rem",
          }}
        >
          Twitter
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "1.2rem",
          }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
