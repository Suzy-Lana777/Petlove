import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        {/* Додаємо wrapper для правильного розподілу елементів */}
        <div className={styles.headerWrapper}>
          {/* 1. Логотип зліва */}
          <Link to="/" className={styles.logo}>
            pet<span>love</span>
          </Link>

          {/* 2. Навігація по центру */}
          <nav className={styles.navigation}>
            <ul className={styles.navLinks}>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notices"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Find pet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/friends"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Our friends
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* 3. Кнопки авторизації справа */}
          <div className={styles.auth}>
            <Link to="/login" className={styles.loginBtn}>
              Log In
            </Link>
            <Link to="/register" className={styles.registerBtn}>
              Registration
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
