import { useState, useEffect, useRef } from "react";

/**
 * Hook que simula un efecto de máquina de escribir (typewriter).
 *
 * @param {string}  text       - Texto completo a escribir.
 * @param {number}  speed      - Milisegundos entre cada carácter (default: 45).
 * @param {number}  startDelay - Milisegundos antes de iniciar (default: 0).
 * @param {boolean} enabled    - Si es false el hook no empieza (default: true).
 * @returns {{ displayed: string, isDone: boolean }}
 */
export function useTypewriter(text = "", speed = 45, startDelay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const delayTimerRef = useRef(null);

  useEffect(() => {
    // Resetear cuando el texto cambia
    setDisplayed("");
    setIsDone(false);
    indexRef.current = 0;
    clearTimeout(delayTimerRef.current);
    clearInterval(timerRef.current);

    if (!enabled) return;

    const start = () => {
      timerRef.current = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length) {
          clearInterval(timerRef.current);
          setIsDone(true);
        }
      }, speed);
    };

    delayTimerRef.current = setTimeout(start, startDelay);

    return () => {
      clearTimeout(delayTimerRef.current);
      clearInterval(timerRef.current);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayed, isDone };
}
