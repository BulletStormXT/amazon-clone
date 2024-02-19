// import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#222",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
        color: "#eee",
      }}
    >
      <h1>Header</h1>
    </div>
  );
};

export default Header;
