import { getDictionary } from "@/shared/i18n/get-dictionary";
import { ContactoHero } from "@/features/contacto/components/ContactoHero/ContactoHero";

/**
 * Contacto page — Server Component.
 *
 * @param {Object} props
 * @param {Promise<{lang: string}>} props.params
 * @returns {JSX.Element}
 */
export default async function ContactoPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <ContactoHero dict={dict.contacto?.hero || {}} />
    </main>
  );
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Contacto | BIM Constructions",
  description:
    "Contáctanos para cotizaciones, consultas y más información sobre nuestros servicios de construcción.",
};
