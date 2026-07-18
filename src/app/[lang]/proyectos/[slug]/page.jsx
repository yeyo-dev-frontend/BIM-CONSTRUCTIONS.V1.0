import { getDictionary } from "@/shared/i18n/get-dictionary";
import { ProyectoDetalleHero } from "@/features/proyectos/components/ProyectoDetalleHero/ProyectoDetalleHero";
import { ProyectoDetalleInfo } from "@/features/proyectos/components/ProyectoDetalleInfo/ProyectoDetalleInfo";
import { PROYECTOS_DATA } from "@/shared/statics/proyectosData";
import { notFound } from "next/navigation";

/**
 * Dynamic route for individual projects.
 *
 * @param {Object} props
 * @param {Promise<{lang: string, slug: string}>} props.params
 * @returns {Promise<JSX.Element>}
 */
export default async function ProyectoDetallePage({ params }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);

  const proyecto = PROYECTOS_DATA.find((p) => p.slug === slug);

  if (!proyecto) {
    notFound();
  }

  // Traducción dinámica del estado
  const statusText =
    proyecto.status === "terminado"
      ? dict.proyectos?.projectDetails?.status?.completed || "Proyecto Terminado"
      : dict.proyectos?.projectDetails?.status?.inProgress || "En Ejecución";

  return (
    <main>
      <ProyectoDetalleHero 
        title={proyecto.detailHeroTitle} 
        imageSrc={proyecto.detailHeroImage} 
        statusText={statusText}
        backText={dict.proyectos?.projectDetails?.backButton || "Volver a Proyectos"}
        lang={lang}
      />
      {/* Sección de Información y Galería */}
      <ProyectoDetalleInfo proyecto={proyecto} dict={dict} statusText={statusText} />
      
    </main>
  );
}
