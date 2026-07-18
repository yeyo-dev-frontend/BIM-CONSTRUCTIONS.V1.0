"use client";

import Image from "next/image";
import styles from "./ProyectoInfoGallery.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { ZoomIn } from "lucide-react";
import { useLightbox } from "@/features/proyectos/hooks/useLightbox";
import { LightboxModal } from "./LightboxModal";

/**
 * Gallery section for project detail page.
 * Handles image grid display and delegates lightbox logic to useLightbox hook.
 *
 * @param {Object} props
 * @param {string[]} props.gallery
 * @param {Object} props.t - i18n translations
 * @param {string} props.title
 */
export function ProyectoInfoGallery({ gallery, t, title }) {
  const { selectedIndex, isOpen, openLightbox, closeLightbox, showPrev, showNext } = useLightbox(gallery);

  if (!gallery || gallery.length === 0) {
    return (
      <div className={styles.galleryColumn}>
        <Title level="h3" variant="secondary">
          {t.images || "Imágenes del Proyecto"}
        </Title>
        <Text>{t.noImages || "No hay imágenes disponibles para este proyecto."}</Text>
      </div>
    );
  }

  return (
    <>
      <div className={styles.galleryColumn}>
        <Title level="h3" variant="secondary">
          {t.images || "Imágenes del Proyecto"}
        </Title>

        <div className={styles.galleryGrid}>
          {gallery.map((imgSrc, index) => (
            <Button
              key={index}
              variant="ghost"
              className={styles.galleryImageWrapper}
              onClick={() => openLightbox(index)}
              ariaLabel={`${t.expandImageAria || "Ampliar imagen"} ${index + 1}`}
            >
              <Image
                src={imgSrc}
                alt={`${t.imageAlt || "Imagen del proyecto"} ${title} - ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.imageOverlay}>
                <ZoomIn size={24} color="white" />
              </div>
            </Button>
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={isOpen}
        selectedIndex={selectedIndex}
        gallery={gallery}
        title={title}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
        t={t}
      />
    </>
  );
}
