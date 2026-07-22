import styles from "./ServiciosHeroBg.module.css";

export function ServiciosHeroBg() {
  return (
    <>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.overlay} aria-hidden="true" />
    </>
  );
}
