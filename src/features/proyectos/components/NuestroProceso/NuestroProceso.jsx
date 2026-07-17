import styles from "./NuestroProceso.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { ClipboardList, PenTool, HardHat, CheckSquare } from "lucide-react";
import { NuestroProcesoStep } from "./parts/NuestroProcesoStep";
import { NUESTRO_PROCESO_STEPS } from "@/shared/statics/proyectosData";

const ICON_MAP = {
  ClipboardList: <ClipboardList size={36} strokeWidth={1.5} />,
  PenTool: <PenTool size={36} strokeWidth={1.5} />,
  HardHat: <HardHat size={36} strokeWidth={1.5} />,
  CheckSquare: <CheckSquare size={36} strokeWidth={1.5} />
};

export function NuestroProceso({ dict }) {
  return (
    <section className={styles.section} aria-labelledby="nuestro-proceso-title">
      <div className={styles.bgSplit} aria-hidden="true"></div>
      
      <div className={styles.container}>
        <Title level="h2" className={styles.title} id="nuestro-proceso-title">
          {dict.title}
        </Title>
        
        <div className={styles.timeline}>
          {NUESTRO_PROCESO_STEPS.map((step) => (
            <NuestroProcesoStep
              key={step.id}
              id={step.id}
              icon={ICON_MAP[step.iconName]}
              label={dict.steps?.[step.dictKey] || step.dictKey.toUpperCase()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
