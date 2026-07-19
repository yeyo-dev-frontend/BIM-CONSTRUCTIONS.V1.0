import styles from "./ContactoHeroContent.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Text content and translucent box for the Contacto Hero.
 *
 * @param {Object} props
 * @param {Object} props.dict - Dictionary for the contact hero
 * @returns {JSX.Element}
 */
export function ContactoHeroContent({ dict }) {
  return (
    <div className={styles.contentContainer}>
      <Title level="h1" className={styles.title}>
        {dict.title || "CONTÁCTANOS"}
      </Title>
      
      <div className={styles.descriptionBox}>
        <Text as="p" variant="inherit" size="lg" className={styles.description}>
          {dict.description || "Contáctanos y descubre cómo en BIM y nuestra gestión financiera garantizan el presupuesto y los plazos de tu obra."}
        </Text>
      </div>
    </div>
  );
}
