import styles from "./ServiciosPanelCollage.module.css";
import Image from "next/image";

export function ServiciosPanelCollage({ cards = [] }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={styles.image}
            />
          </div>
          <h3 className={styles.cardTitle}>{card.title}</h3>
        </div>
      ))}
    </div>
  );
}
