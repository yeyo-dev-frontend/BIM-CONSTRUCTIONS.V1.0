import Image from "next/image";
import styles from "./LightboxModal.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox modal component for fullscreen image viewing with navigation.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {number} props.selectedIndex
 * @param {string[]} props.gallery
 * @param {string} props.title
 * @param {Function} props.onClose
 * @param {Function} props.onPrev
 * @param {Function} props.onNext
 * @param {Object} props.t - i18n translations
 */
export function LightboxModal({ isOpen, selectedIndex, gallery, title, onClose, onPrev, onNext, t }) {
  if (!isOpen || selectedIndex === null) return null;

  return (
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.lightboxAria || "Visor de imágenes"}
    >
      <Button variant="ghost" className={styles.closeBtn} onClick={onClose} ariaLabel={t.closeAria || "Cerrar imagen"}>
        <X size={32} />
      </Button>

      <Button variant="ghost" className={styles.navBtnPrev} onClick={onPrev} ariaLabel={t.prevAria || "Imagen anterior"}>
        <ChevronLeft size={36} />
      </Button>

      <Button variant="ghost" className={styles.navBtnNext} onClick={onNext} ariaLabel={t.nextAria || "Siguiente imagen"}>
        <ChevronRight size={36} />
      </Button>

      <div className={styles.lightboxImageContainer} onClick={(e) => e.stopPropagation()}>
        <Image
          src={gallery[selectedIndex]}
          alt={`${t.lightboxAlt || "Imagen en pantalla completa"} - ${selectedIndex + 1}`}
          fill
          style={{ objectFit: "contain" }}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
