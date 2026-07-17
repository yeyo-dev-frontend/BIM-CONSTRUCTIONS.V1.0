import styles from "./ServiciosCTA.module.css";
import { ServiciosCTABoxes } from "./parts/ServiciosCTABoxes";
import { ServiciosCTABanner } from "./parts/ServiciosCTABanner";

export function ServiciosCTA({ dict }) {
  return (
    <section className={styles.section}>
      <ServiciosCTABoxes dict={dict} />
      <ServiciosCTABanner dict={dict} />
    </section>
  );
}
