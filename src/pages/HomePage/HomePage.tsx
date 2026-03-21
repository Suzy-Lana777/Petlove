import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";

export default function HomePage() {
  return (
    // Оновлена структура для накладання
    <div className={styles.pageContainer}>
      <Header />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Додаємо обгортку для тексту, щоб на десктопі спрацював Flexbox */}
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Take good <span>care</span> of your small pets
              </h1>
              <p className={styles.description}>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </p>
            </div>
          </div>

          <div className={styles.heroBackgroundBlock}></div>
        </div>
      </section>
    </div>
  );
}
