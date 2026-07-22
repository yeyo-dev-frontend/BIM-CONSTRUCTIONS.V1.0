import styles from "./ServiciosPanel.module.css";
import { ServiciosPanelContent } from "./parts/ServiciosPanelContent";
import { ServiciosPanelCollage } from "./parts/ServiciosPanelCollage";

/**
 * Panel "NUESTROS SERVICIOS"
 * Modularized: delegates text/cta and collage to dedicated parts.
 *
 * @param {Object} props
 * @param {string} props.lang
 * @param {Object} props.dict  – dict.panel
 */
export function ServiciosPanel({ lang, dict }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ServiciosPanelContent dict={dict} />
        <ServiciosPanelCollage cards={dict.cards} />
      </div>
    </section>
  );
}
