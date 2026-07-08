"use client";

import styles from "./HeroContent.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { useTypewriter } from "@/shared/hooks/useTypewriter";

/**
 * Foreground content layer for the Hero component.
 *
 * @param {Object} props
 * @param {Object} props.dict
 * @param {string} props.lang
 * @returns {JSX.Element}
 */
export function HeroContent({ dict, lang }) {
  /* Título principal: empieza de inmediato */
  const { displayed: titleText, isDone: titleDone } = useTypewriter(
    dict.title,
    55,
    300
  );

  /* Palabra destacada: empieza cuando el título termina */
  const titleLen = dict.title?.length ?? 0;
  const highlightDelay = 300 + titleLen * 55 + 150;
  const { displayed: highlightText, isDone: highlightDone } = useTypewriter(
    dict.highlight,
    65,
    highlightDelay
  );

  /* Descripción: empieza cuando el highlight termina */
  const highlightLen = dict.highlight?.length ?? 0;
  const descDelay = highlightDelay + highlightLen * 65 + 300;
  const { displayed: descText, isDone: descDone } = useTypewriter(
    dict.description,
    18,
    descDelay
  );

  /* El botón aparece cuando la descripción termina */
  const highlightLen2 = dict.description?.length ?? 0;
  const btnDelay = descDelay + highlightLen2 * 18 + 200;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title as="h1" level="h1" variant="white" className={styles.title}>
          {/* Texto del título con cursor */}
          <span>
            {titleText}
            {!titleDone && <span className={styles.cursor}>|</span>}
          </span>{" "}
          {/* Highlight con cursor propio */}
          <span className={styles.highlight}>
            {highlightText}
            {titleDone && !highlightDone && (
              <span className={styles.cursor}>|</span>
            )}
          </span>
        </Title>

        {/* Descripción */}
        <Text variant="white" size="lg" className={styles.description}>
          {descText}
          {highlightDone && !descDone && (
            <span className={styles.cursor}>|</span>
          )}
        </Text>

        {/* Botón con fade-in después de que termina la descripción */}
        <div
          className={styles.actions}
          style={{
            animation: descDone
              ? `heroBtnFadeIn 0.6s ease forwards`
              : "none",
            opacity: descDone ? 1 : 0,
          }}
        >
          <Button href={`/${lang}/proyectos`} variant="primary" size="lg">
            {dict.btnProjects}
          </Button>
        </div>
      </div>
    </div>
  );
}
