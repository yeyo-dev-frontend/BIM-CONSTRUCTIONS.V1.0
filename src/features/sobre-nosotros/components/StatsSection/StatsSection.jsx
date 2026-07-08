import styles from "./StatsSection.module.css";
import { StatsMetrics } from "./parts/StatsMetrics";

export function StatsSection({ lang, dict }) {
  return (
    <section className={styles.section}>
      {/* ---- Fondo con rayos diagonales ---- */}
      <div className={styles.bgRays} aria-hidden="true">
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
      </div>

      {/* ---- Contenedor de los Textos/Métricas ---- */}
      <div className={styles.container}>
        <StatsMetrics dict={dict} />
      </div>

      {/* ---- Flecha (¡Fuera del container para pegarla al borde!) ---- */}
      <div className={styles.arrowIcon} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M12 16.5l-7-7 1.41-1.41L12 13.67l5.59-5.58L19 9.5z" />
        </svg>
      </div>


    </section>
  );
}