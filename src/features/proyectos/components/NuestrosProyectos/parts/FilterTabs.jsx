import { Button } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/cn";
import styles from "./FilterTabs.module.css";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Filter tabs with slanted (parallelogram) design.
 *
 * @param {Object} props
 * @param {string} props.activeFilter
 * @param {(filter: string) => void} props.onChange
 * @returns {JSX.Element}
 */
export function FilterTabs({ activeFilter, onChange, dict }) {
  const tabs = [
    { id: "todos", label: dict.todos },
    { id: "ejecucion", label: dict.ejecucion },
    { id: "terminado", label: dict.terminado }
  ];

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="outline"
          className={cn(styles.tabBtn, activeFilter === tab.id && styles.active)}
          onClick={() => onChange(tab.id)}
          aria-pressed={activeFilter === tab.id}
        >
          <div className={styles.tabContent}>
            <Text as="span" weight="bold" className={styles.tabText}>
              {tab.label}
            </Text>
          </div>
        </Button>
      ))}
    </div>
  );
}
