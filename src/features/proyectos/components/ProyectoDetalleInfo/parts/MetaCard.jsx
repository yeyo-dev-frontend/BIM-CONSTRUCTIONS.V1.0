import styles from "./MetaCard.module.css";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Single metadata card for project details.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.value
 */
export function MetaCard({ label, value }) {
  return (
    <div className={styles.metaCard}>
      <Text as="span" variant="inherit" size="inherit" className={styles.metaLabel}>
        {label}
      </Text>
      <div className={styles.metaDivider} />
      <Text as="span" variant="inherit" size="inherit" className={styles.metaValue}>
        {value}
      </Text>
    </div>
  );
}
