// import Navigation from "../Navigation/Navigation";
import { FaAmazon, FaHourglass } from "react-icons/fa";
import Logo from "../../assets/img/Spice.svg";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backdropFilter: "blur(2px)",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#22222299",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
        color: "#eee",
      }}
    >
      <img
        src={Logo}
        alt="Spice-Logo"
        height="40px"
        style={{ padding: "10px 0" }}
      />

      <FaHourglass />

      <FaAmazon style={{ color: "#351a7c", fontSize: "2rem" }} />
    </div>
  );
};

export default Header;
