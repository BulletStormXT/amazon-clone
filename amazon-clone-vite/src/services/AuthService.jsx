import products from "../db.json";

const AuthService = {
  login: (username, password) => {
    const user = products.users.find(
      (user) => user.name === username && user.password === password
    );
    return user;
  },
};

export default AuthService;
