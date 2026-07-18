import styles from "./ProyectoInfoDescription.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

export function ProyectoInfoDescription({ description, t }) {
  return (
    <div className={styles.textColumn}>
      <Title level="h3" variant="secondary">
        {t.about || "Sobre el Proyecto"}
      </Title>
      <div className={styles.descriptionWrapper}>
        {description.map((paragraph, index) => (
          <Text key={index} as="p" className={styles.descriptionParagraph}>
            {paragraph}
          </Text>
        ))}
      </div>
    </div>
  );
}
