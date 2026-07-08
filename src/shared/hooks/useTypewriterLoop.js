import { useState, useEffect, useRef } from "react";

/**
 * Hook typewriter en loop infinito:
 * escribe el texto → pausa → borra → pausa → repite.
 *
 * @param {string} text        - Texto a animar.
 * @param {number} typeSpeed   - ms por carácter al escribir (default: 80).
 * @param {number} deleteSpeed - ms por carácter al borrar (default: 40).
 * @param {number} pauseAfter  - ms de pausa cuando termina de escribir (default: 1800).
 * @param {number} pauseEmpty  - ms de pausa cuando queda vacío (default: 500).
 * @returns {{ displayed: string, isTyping: boolean }}
 */
export function useTypewriterLoop(
  text = "",
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseAfter = 1800,
  pauseEmpty = 500
) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const phaseRef = useRef("typing"); // "typing" | "pauseAfter" | "deleting" | "pauseEmpty"
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const phase = phaseRef.current;

      if (phase === "typing") {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        setIsTyping(true);

        if (indexRef.current >= text.length) {
          phaseRef.current = "pauseAfter";
          timerRef.current = setTimeout(tick, pauseAfter);
        } else {
          timerRef.current = setTimeout(tick, typeSpeed);
        }
      } else if (phase === "pauseAfter") {
        phaseRef.current = "deleting";
        timerRef.current = setTimeout(tick, deleteSpeed);
      } else if (phase === "deleting") {
        indexRef.current -= 1;
        setDisplayed(text.slice(0, indexRef.current));

        if (indexRef.current <= 0) {
          phaseRef.current = "pauseEmpty";
          setIsTyping(false);
          timerRef.current = setTimeout(tick, pauseEmpty);
        } else {
          timerRef.current = setTimeout(tick, deleteSpeed);
        }
      } else if (phase === "pauseEmpty") {
        phaseRef.current = "typing";
        setIsTyping(true);
        timerRef.current = setTimeout(tick, typeSpeed);
      }
    };

    // Arrancar
    timerRef.current = setTimeout(tick, typeSpeed);

    return () => clearTimeout(timerRef.current);
  }, [text, typeSpeed, deleteSpeed, pauseAfter, pauseEmpty]);

  return { displayed, isTyping };
}
