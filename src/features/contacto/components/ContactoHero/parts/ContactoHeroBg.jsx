import Image from "next/image";
import styles from "./ContactoHeroBg.module.css";
import { CurveDivider } from "./CurveDivider";

/**
 * Background image layer for ContactoHero.
 * Includes the overlay and the bottom curve divider.
 *
 * @returns {JSX.Element}
 */
export function ContactoHeroBg() {
  return (
    <div className={styles.bgWrapper} aria-hidden="true">
      <Image
        src="/images/contacto-hero.png"
        alt=""
        fill
        className={styles.bgImage}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <CurveDivider className={styles.curve} />
    </div>
  );
}
