import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./ServiciosPanelContent.module.css";

export function ServiciosPanelContent({ dict }) {
  return (
    <div className={styles.header}>
      <Title level="h2" className={styles.title}>{dict.title}</Title>
      <Text as="p" className={styles.description}>{dict.description}</Text>
    </div>
  );
}
