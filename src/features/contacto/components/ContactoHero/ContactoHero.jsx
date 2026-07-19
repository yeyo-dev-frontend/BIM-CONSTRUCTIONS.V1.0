import styles from "./ContactoHero.module.css";
import { ContactoHeroBg } from "./parts/ContactoHeroBg";
import { ContactoHeroContent } from "./parts/ContactoHeroContent";

/**
 * Hero section for the Contacto page.
 * Uses a modular architecture for background (with SVG curve) and content.
 *
 * @param {Object} props
 * @param {Object} props.dict - Dictionary translations for the hero section
 * @returns {JSX.Element}
 */
export function ContactoHero({ dict }) {
  return (
    <section className={styles.hero}>
      <ContactoHeroBg />
      <div className={styles.contentWrapper}>
        <ContactoHeroContent dict={dict} />
      </div>
    </section>
  );
}
