import styles from "./CurveDivider.module.css";
import { cn } from "@/shared/lib/cn";

/**
 * Modularized SVG curve divider for the bottom of hero sections.
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional classes
 */
export function CurveDivider({ className }) {
  return (
    <div className={cn(styles.curveContainer, className)} aria-hidden="true">
      <svg
        className={styles.curveSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,138.7C672,139,768,181,864,208C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
