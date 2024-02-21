const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "#22222299",
        color: "#eee",
        padding: "15px",
        height: "50px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div style={{ position: "absolute", left: "0", padding: "0 15px" }}>
        Amazon&reg;-Clone
      </div>
      <div style={{ position: "absolute", left: "32%", right: "32%" }}>
        Designed & Developed by Vincent, Marcel, Thomas &amp; Sebastian
      </div>
      <div style={{ position: "absolute", right: "0", padding: "0 15px" }}>
        &copy;2024
      </div>
    </div>
  );
};

export default Footer;
