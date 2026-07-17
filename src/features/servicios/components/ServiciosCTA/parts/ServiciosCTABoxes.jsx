import styles from "./ServiciosCTABoxes.module.css";
import { Title } from "@/shared/ui/Title/Title";

export function ServiciosCTABoxes({ dict }) {
  if (!dict.boxes) return null;

  return (
    <div className={styles.boxesContainer}>
      <div className={styles.leftColumn}>
        {dict.boxes.slice(0, 2).map((box, idx) => (
          <div key={idx} className={styles.blackBox}>
            <Title level="h3" variant="white" className={styles.boxTitle}>
              {box.title}
            </Title>
          </div>
        ))}
      </div>
      <div className={styles.rightColumn}>
        {dict.boxes.slice(2, 4).map((box, idx) => (
          <div key={idx + 2} className={styles.blackBox}>
            <Title level="h3" variant="white" className={styles.boxTitle}>
              {box.title}
            </Title>
          </div>
        ))}
      </div>
    </div>
  );
}
