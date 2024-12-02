import React from "react";
// import "./Footer.css"; // Optional: For styling

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <ul style={styles.links}>
          <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    fontSize: "15px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    position: "",
    bottom: 0,
    width: "100rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 15px",
  },
  text: {
    margin: "0 0 10px",
  },
  links: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Footer;
