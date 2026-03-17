import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss"; // або .scss, якщо перейменувала

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navigation}>
          {/* LOGO */}
          <Link to="/" className={styles.logo}>
            petl<span>love</span>
          </Link>

          {/* Nav - центральна частина */}
          <ul className={styles.navLinks}>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/notices">Find pet</NavLink></li>
            <li><NavLink to="/friends">Our friends</NavLink></li>
          </ul>

          {/* AuthNav / UserNav - права частина */}
          <div className={styles.auth}>
             {/* Поки що просто кнопка для прикладу */}
             <Link to="/login" className={styles.loginBtn}>Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}