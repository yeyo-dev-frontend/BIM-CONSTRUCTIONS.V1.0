import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./ServiciosHeroContent.module.css";

export function ServiciosHeroContent({ lang, dict }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title level="h1" className={styles.title}>{dict.title}</Title>
        <Text as="p" className={styles.description}>{dict.description}</Text>
        <Button variant="primary" href={`/${lang}/contacto`} className={styles.btn}>
          {dict.btnContact}
        </Button>
      </div>
    </div>
  );
}
