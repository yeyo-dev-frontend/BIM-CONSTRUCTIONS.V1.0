import styles from "./ProyectoInfoMetaCards.module.css";
import { MetaCard } from "./MetaCard";

/**
 * Grid of metadata cards for a project (Client, Status, Execution Time, Area).
 *
 * @param {Object} props
 * @param {Object} props.proyecto
 * @param {Object} props.t - i18n translations
 * @param {string} props.statusText
 */
export function ProyectoInfoMetaCards({ proyecto, t, statusText }) {
  const metaItems = [
    { label: t.client || "CLIENTE",              value: proyecto.client || "---" },
    { label: t.status || "ESTADO",               value: statusText },
    { label: t.executionTime || "TIEMPO DE EJECUCIÓN", value: proyecto.executionTime || "---" },
    { label: t.area || "ÁREA",                   value: proyecto.area || "---" },
  ];

  return (
    <div className={styles.metaGrid}>
      {metaItems.map((item) => (
        <MetaCard key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
