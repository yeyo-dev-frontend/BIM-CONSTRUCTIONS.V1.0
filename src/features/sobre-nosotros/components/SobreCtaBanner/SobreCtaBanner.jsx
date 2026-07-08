import styles from "./SobreCtaBanner.module.css";
import { Button } from "@/shared/ui/Button/Button";

/**
 * Final CTA banner for Sobre Nosotros page.
 * Dark strip with headline, orange subtitle and a quote-link button.
 *
 * @param {Object} props
 * @param {string} props.lang
 * @param {{ title: string, highlight: string, subtitle: string, label: string, btn: string }} props.dict
 * @returns {JSX.Element}
 */
export function SobreCtaBanner({ lang, dict }) {
  return (
    <section className={styles.banner} id="sobre-cta">
      <div className={styles.container}>
        {/* ---- Izquierda: texto ---- */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            {dict.title}{" "}
            <span className={styles.highlight}>{dict.highlight}</span>
          </h2>
          <p className={styles.subtitle}>{dict.subtitle}</p>
        </div>

        {/* ---- Derecha: CTA ---- */}
        <div className={styles.right}>
          <span className={styles.label}>{dict.label}</span>
          <Button
            href={`/${lang}/contacto`}
            variant="outline"
            size="lg"
            id="sobre-cta-btn"
            className={styles.ctaBtn}
          >
            {dict.btn}
          </Button>
        </div>
      </div>
    </section>
  );
}
