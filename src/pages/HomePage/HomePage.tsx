// TypeScript більше не сваритиметься, бо імпорт прибрано
import styles from "./Home.module.scss";

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        
        {/* Жовта картка з текстом (декор, фон) */}
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Take good care of your <span>small pets</span>
            </h1>
            <p className={styles.description}>
              Choosing a pet for your home is a choice that is as important as 
              choosing a family member.
            </p>
          </div>
        </div>

        {/* Блок із ФОНОВИМ зображенням */}
        <div className={styles.heroBackgroundBlock}>
          {/* Він порожній, бо картинка задається в CSS */}
        </div>
      </div>
    </section>
  );
}