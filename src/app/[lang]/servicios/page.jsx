import { getDictionary } from "@/shared/i18n/get-dictionary";
import { ServiciosHero } from "@/features/servicios/components/ServiciosHero/ServiciosHero";
import { ServiciosIntro } from "@/features/servicios/components/ServiciosIntro/ServiciosIntro";
import { ServiciosPanel } from "@/features/servicios/components/ServiciosPanel/ServiciosPanel";
import { ServiciosEnfoque } from "@/features/servicios/components/ServiciosEnfoque/ServiciosEnfoque";
import { ServiciosCTA } from "@/features/servicios/components/ServiciosCTA/ServiciosCTA";

/**
 * Servicios page — Server Component.
 * Replica el prototipo Figma al 100%:
 *  1. Hero — imagen edificio vidrio + texto + botón pill
 *  2. Introducción — gris claro, 2 fotos solapadas + texto ¿Qué hacemos?
 *  3. Panel: NUESTROS SERVICIOS (Grid 4 fotos)
 *  4. Enfoque: "El Valor de Nuestro Enfoque"
 *  5. Iconos — fila de 3 iconos + nombre
 *
 * @param {Object} props
 * @param {Promise<{lang: 'en' | 'es'}>} props.params
 * @returns {Promise<JSX.Element>}
 */
export default async function ServiciosPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.servicios;

  return (
    <main>
      <ServiciosHero lang={lang} dict={t.hero} />

      <ServiciosIntro dict={t.intro} />

      <ServiciosPanel lang={lang} dict={t.panel} />

      <ServiciosEnfoque dict={t.valor} />

      <ServiciosCTA dict={t.cta} />
    </main>
  );
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Servicios | BIM Constructions",
  description:
    "Servicios de construcción, ingeniería y gestión de proyectos por BIM Constructions. Gerencia de proyectos, supervisión de obras, modelado BIM y más.",
};
