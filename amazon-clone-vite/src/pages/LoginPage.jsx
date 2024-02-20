import LoginForm from "../services/LoginForm";

const LoginPage = () => {
  const handleLogin = (username, password) => {
    console.log("Logging in with:", username, password);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
