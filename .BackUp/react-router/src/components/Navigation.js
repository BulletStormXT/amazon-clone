import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Us", to: "/about-us", id: 2 },
  ];
  return (
    <nav className={styles.container}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
// active
