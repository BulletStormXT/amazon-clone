import data from "../db.json";

const AuthService = {
  login: (username, password) => {
    const user = data.users.find(
      (user) => user.name === username && user.password === password
    );
    return user;
  },
};

export default AuthService;
