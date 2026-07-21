"use client";

import styles from "./error.module.css";
import { Button } from "@/shared/ui/Button/Button";

/**
 * Global error boundary. Catches unhandled errors in the route tree.
 *
 * @param {Object} props
 * @param {Error} props.error - The thrown error.
 * @param {() => void} props.reset - Function to retry rendering the segment.
 * @returns {JSX.Element}
 */
export default function GlobalError({ error, reset }) {
  // Log to monitoring service in production (to be implemented with monitoring.js)
  if (process.env.NODE_ENV === "production") {
    // monitoring.log({ level: 'error', message: 'Global Error', metadata: { error } });
  }

  return (
    <main className={styles.errorPage} role="alert">
      <h1 className={styles.title}>Algo salió mal</h1>
      <p className={styles.message}>
        {error.message || "Ocurrió un error inesperado en la aplicación. Por favor, intenta de nuevo."}
      </p>
      <div className={styles.actions}>
        <Button variant="primary" onClick={reset}>
          Reintentar
        </Button>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Volver al Inicio
        </Button>
      </div>
    </main>
  );
}
