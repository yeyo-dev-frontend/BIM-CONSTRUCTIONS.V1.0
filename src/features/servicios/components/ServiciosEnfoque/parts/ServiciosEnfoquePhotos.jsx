import styles from "./ServiciosEnfoquePhotos.module.css";
import Image from "next/image";
import { Text } from "@/shared/ui/Text/Text";

export function ServiciosEnfoquePhotos() {
  return (
    <div className={styles.photoGroup} aria-hidden="true">
      <div className={styles.photo1}>
        <Image
          src="/images/construction-plans.png"
          alt="Ingenieros revisando planos arquitectónicos"
          fill
          sizes="(max-width: 900px) 200px, 260px"
          className={styles.img}
        />
      </div>
      
      <div className={styles.plusBox}>
        <Text as="span" weight="bold" variant="white">+100</Text>
      </div>

      <div className={styles.photo2}>
        <Image
          src="/images/team-bim.png"
          alt="Reunión de equipo con modelo BIM 3D"
          fill
          sizes="(max-width: 900px) 180px, 230px"
          className={styles.img}
        />
      </div>
    </div>
  );
}
