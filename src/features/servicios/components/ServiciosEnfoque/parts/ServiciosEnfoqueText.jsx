import styles from "./ServiciosEnfoqueText.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { CheckCircle2 } from "lucide-react";

export function ServiciosEnfoqueText({ dict }) {
  return (
    <div className={styles.textGroup}>
      <div className={styles.headingWrapper}>
        <div className={styles.dashLine} aria-hidden="true"></div>
        <Title level="h2" className={styles.heading}>{dict.title}</Title>
      </div>
      <Text as="p" className={styles.description}>{dict.text}</Text>
      
      <div className={styles.checklist}>
        {dict.list?.map((item, index) => (
          <div key={index} className={styles.checklistItem}>
            <CheckCircle2 className={styles.checkIcon} />
            <Text as="span" className={styles.checkText}>{item}</Text>
          </div>
        ))}
      </div>
      <Button variant="primary" href="/es/proyectos" className={styles.btn}>
        {dict.btn || "SOLICITAR INFORMACIÓN"}
      </Button>
    </div>
  );
}
