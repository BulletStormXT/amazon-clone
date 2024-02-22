const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "#9bb1d099",
        color: "#222",
        padding: "15px",
        height: "50px",
        backdropFilter: "blur(4px)",
        textShadow: "0px 0px 4px #fff",
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
