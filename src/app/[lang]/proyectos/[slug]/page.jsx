import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Dynamic route for individual projects.
 *
 * @param {Object} props
 * @param {Promise<{lang: string, slug: string}>} props.params
 * @returns {Promise<JSX.Element>}
 */
export default async function ProyectoDetallePage({ params }) {
  const { lang, slug } = await params;

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", textAlign: "center" }}>
      <Title level="h1">Proyecto: {slug}</Title>
      <Text as="p" style={{ marginTop: "20px" }}>
        Próximamente: Detalles completos del proyecto aquí.
      </Text>
    </main>
  );
}
