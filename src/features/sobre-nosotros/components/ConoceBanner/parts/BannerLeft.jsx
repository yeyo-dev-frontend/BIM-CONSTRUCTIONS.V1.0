"use client";

import { useTypewriterLoop } from "@/shared/hooks/useTypewriterLoop";
import styles from "./BannerLeft.module.css";

/**
 * Left side of ConoceBanner: title with infinite typewriter loop.
 * Writes → pauses → deletes → pauses → repeats forever.
 *
 * @param {Object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */
export function BannerLeft({ title }) {
  const { displayed, isTyping } = useTypewriterLoop(
    title,
    85,   /* ms por carácter al escribir  */
    45,   /* ms por carácter al borrar    */
    2000, /* pausa cuando termina         */
    400   /* pausa cuando está vacío      */
  );

  return (
    <div className={styles.left}>
      <h2 className={styles.title}>
        {displayed}
        <span className={styles.cursor}>|</span>
      </h2>
      <div className={styles.separator} />
    </div>
  );
}
