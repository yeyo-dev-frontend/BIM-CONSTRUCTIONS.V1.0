import styles from "./ServiciosCTABanner.module.css";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";

export function ServiciosCTABanner({ dict }) {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <Title level="h2" className={styles.title}>{dict.title}</Title>
          <Text as="p" className={styles.description}>{dict.description}</Text>
          <Button variant="primary" className={styles.btn} href="/es/contacto">
            {dict.btn || "CONTÁCTANOS"}
          </Button>
        </div>
        <div className={styles.logoWrapper}>
          <Image src="/images/logo-metal.png.png" alt="BIM Logo" width={200} height={100} className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
