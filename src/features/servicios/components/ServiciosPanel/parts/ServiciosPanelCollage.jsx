import styles from "./ServiciosPanelCollage.module.css";
import Image from "next/image";

export function ServiciosPanelCollage() {
  return (
    <div className={styles.grid}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/team-bim.png"
          alt="Ingeniería y diseño"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/servicios/remodelaciones.png"
          alt="Remodelaciones"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/servicios/construccion-civil.png"
          alt="Construcción civil"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/construction-plans.png"
          alt="Supervisión de obras"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
    </div>
  );
}
