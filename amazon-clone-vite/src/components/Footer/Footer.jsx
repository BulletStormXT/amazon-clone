const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#9bb1d099",
        color: "#222",
        padding: "15px",
        height: "30px",

        backdropFilter: "blur(4px)",
        textShadow: "2px 2px 4px #fff",
        position: "absolute",
        left: "0",
        right: "0",
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
