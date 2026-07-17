import styles from "./NuestroProcesoStep.module.css";
import { Text } from "@/shared/ui/Text/Text";

export function NuestroProcesoStep({ id, label, icon }) {
  return (
    <div className={styles.step}>
      <div className={styles.watermark} aria-hidden="true">
        {id}
      </div>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <Text as="h3" className={styles.stepTitle}>
        {label}
      </Text>
    </div>
  );
}
