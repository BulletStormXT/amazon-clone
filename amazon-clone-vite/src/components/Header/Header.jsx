// import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { FaAmazon } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import Logo from "../../assets/img/Spice.svg";
import LoginForm from "../../pages/LoginForm.jsx";
// import Home from "../../pages/Home.jsx";
import PropTypes from "prop-types";

// import {Home} from "../../pages/Home";

/* const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backdropFilter: "blur(4px)",
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

      <LoginForm />

      <div>
        <RiShoppingCartFill style={{ color: "#351a7c", fontSize: "2rem" }} />
        &nbsp;&nbsp;
        <FaAmazon style={{ color: "#351a7c", fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default Header; */

const Header = ({ itemCount }) => {
  const handleLogin = (username, password) => {
    console.log("Logging in with:", username, password);
  };
  console.log(itemCount);
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

      <LoginForm onLogin={handleLogin} />

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

/* import { FaAmazon, FaShoppingCart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Logo from "../../assets/img/Spice.svg";
import LoginForm from "../../services/LoginForm";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(cartItems.length);

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backdropFilter: "blur(4px)",
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

      <LoginForm />

      <div style={{ position: "relative" }}>
        <RiShoppingCartFill style={{ color: "#351a7c", fontSize: "2rem" }} />
        <span
          style={{
            fontSize: "1.5rem",
            marginLeft: "0.5rem",
            position: "absolute",
            top: "-10px",
            right: "-10px",
            backgroundColor: "#ff4b2b",
            borderRadius: "50%",
            padding: "4px",
            color: "#fff",
          }}
        >
          {cartCount}
        </span>
      </div>

      <FaAmazon style={{ color: "#351a7c", fontSize: "2rem" }} />
    </div>
  );
};

export default Header; */
