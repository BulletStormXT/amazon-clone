import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import Header from "../components/Header/Header";
// import AuthService from "../services/AuthService";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("../db.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onLogin(user); // Assuming onLogin expects the user object
    } else {
      // Handle invalid credentials
      console.log("Invalid username or password");
    }
    onLogin(username, password);
  };

  return (
    <div className="userform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        &nbsp;
        <input
          type="password"
          id="userpassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        &nbsp;
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
