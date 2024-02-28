import { useState, useEffect } from "react";
import { FaAmazon } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import Logo from "../../assets/img/Spice.svg";
import LoginForm from "../../pages/LoginForm.jsx";
import PropTypes from "prop-types";

const Header = ({ itemCount }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {}, []);

  const handleLogin = (username, password) => {
    console.log("Logging in with:", username, password);
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backdropFilter: "blur(4px)",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#9bb1d099",
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

      {loggedIn ? (
        <div
          style={{ color: "#351a7c", fontSize: "1.4rem", fontWeight: "bold" }}
        >
          Welcome, {username}!
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <RiShoppingCartFill
            style={{ color: "#351a7c", fontSize: "2rem", cursor: "pointer" }}
          />
        </div>
        <div className="item-count" style={{ marginLeft: "10px" }}>
          {itemCount}
        </div>
        <div style={{ marginLeft: "20px" }}>
          <FaAmazon style={{ color: "#351a7c", fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default Header;
