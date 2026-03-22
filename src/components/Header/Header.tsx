// import { Link, NavLink } from "react-router-dom";
// import styles from "./Header.module.scss";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className="container">
//         {/* Додаємо wrapper для правильного розподілу елементів */}
//         <div className={styles.headerWrapper}>
//           {/* 1. Логотип зліва */}
//           <Link to="/" className={styles.logo}>
//             pet<span>love</span>
//           </Link>

//           {/* 2. Навігація по центру */}
//           <nav className={styles.navigation}>
//             <ul className={styles.navLinks}>
//               <li>
//                 <NavLink
//                   to="/news"
//                   className={({ isActive }) => (isActive ? styles.active : "")}
//                 >
//                   News
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/notices"
//                   className={({ isActive }) => (isActive ? styles.active : "")}
//                 >
//                   Find pet
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/friends"
//                   className={({ isActive }) => (isActive ? styles.active : "")}
//                 >
//                   Our friends
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>

//           {/* 3. Кнопки авторизації справа */}
//           <div className={styles.auth}>
//             <Link to="/login" className={styles.loginBtn}>
//               Log In
//             </Link>
//             <Link to="/register" className={styles.registerBtn}>
//               Registration
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* LOGO */}
        <Link to="/" className={styles.logo}>
          pet<span>love</span>
        </Link>

        {/* NAVIGATION (Тільки десктоп) */}
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

        <div className={styles.controls}>
          {/* AUTH (Планшет + Десктоп) */}
          <div className={styles.auth}>
            <Link to="/login" className={styles.loginBtn}>
              Log In
            </Link>
            <Link to="/register" className={styles.registerBtn}>
              Registration
            </Link>
          </div>

          {/* BURGER BUTTON (Мобілка + Планшет) */}
          <button
            className={`${styles.burgerBtn} ${isMenuOpen ? styles.burgerActive : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={styles.burgerIcon}
              viewBox="0 0 32 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="2" y1="2" x2="30" y2="2" className={styles.line} />
              <line x1="2" y1="10" x2="30" y2="10" className={styles.line} />
              <line x1="2" y1="18" x2="30" y2="18" className={styles.line} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
