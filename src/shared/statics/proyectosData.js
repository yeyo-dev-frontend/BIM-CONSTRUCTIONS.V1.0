/**
 * Array estático con la información simulada de los proyectos.
 * status: "ejecucion" | "terminado"
 */
export const PROYECTOS_DATA = [
  {
    id: 1,
    slug: "hostal-boutique",
    title: "HOSTAL",
    detailHeroTitle: "HOSTAL CR7-GOAT",
    status: "terminado",
    client: "Cristiano Ronaldo",
    executionTime: "18 Meses",
    area: "12 000m²",
    description: [
      "El Desafío y Propósito 'La construcción del nuevo Hostal Boutique responde a la necesidad de crear espacios de lujo integrando un diseño arquitectónico que optimiza la experiencia del huésped. El principal reto consistió en proyectar una estructura vanguardista que respetara el entorno urbano mientras ofrecía amenidades de clase mundial.'",
      "Innovación y Metodología 'Para asegurar la máxima precisión y optimización de recursos, implementamos la metodología BIM (Building Information Modeling) desde la fase de diseño preliminar. Esto nos permitió coordinar en tiempo real todas las ingenierías (estructuras, instalaciones sanitarias, eléctricas y climatización especializada), reduciendo a cero las interferencias críticas durante la etapa de construcción en campo.'",
      "Sostenibilidad y Resultado 'El resultado es un complejo de vanguardia que integra sistemas de eficiencia energética. Un proyecto ejecutado bajo los más altos estándares de calidad arquitectónica y de ingeniería civil, entregado en el plazo previsto para el beneficio de la comunidad.'"
    ],
    image: "/images/proyectos/hostal_project_1784149305429.png",
    detailHeroImage: "/images/proyectos/hostal_maqueta_hero.png",
    gallery: [
      "/images/proyectos/hostal_maqueta_hero.png",
      "/images/proyectos/hostal_maqueta_side.png",
      "/images/proyectos/hostal_structure_3d.png",
      "/images/proyectos/hostal_completed_front.png",
      "/images/proyectos/hostal_completed_angle.png"
    ]
  },
  {
    id: 2,
    slug: "edificio-corporativo",
    title: "CORPORATIVO",
    detailHeroTitle: "EDIFICIO CORPORATIVO",
    status: "terminado",
    image: "/images/proyectos/corporate_building_1784149314956.png",
    detailHeroImage: "/images/proyectos/corporate_building_1784149314956.png"
  },
  {
    id: 3,
    slug: "complejo-residencial-alpha",
    title: "RESIDENCIAL",
    detailHeroTitle: "COMPLEJO RESIDENCIAL ALPHA",
    status: "terminado",
    image: "/images/proyectos/residential_complex_1784149324288.png",
    detailHeroImage: "/images/proyectos/residential_complex_1784149324288.png"
  },
  {
    id: 4,
    slug: "centro-comercial-omega",
    title: "COMERCIAL",
    detailHeroTitle: "CENTRO COMERCIAL OMEGA",
    status: "ejecucion",
    image: "/images/proyectos/shopping_mall_1784149333519.png",
    detailHeroImage: "/images/proyectos/shopping_mall_1784149333519.png"
  },
  {
    id: 5,
    slug: "hospital-regional",
    title: "HOSPITAL",
    detailHeroTitle: "HOSPITAL REGIONAL",
    status: "ejecucion",
    image: "/images/proyectos/regional_hospital_1784149341762.png",
    detailHeroImage: "/images/proyectos/regional_hospital_1784149341762.png"
  },
  {
    id: 6,
    slug: "universidad-nacional-pabellon",
    title: "PABELLON",
    detailHeroTitle: "PABELLÓN UNIVERSITARIO",
    status: "ejecucion",
    image: "/images/proyectos/university_pavilion_1784149350042.png",
    detailHeroImage: "/images/proyectos/university_pavilion_1784149350042.png"
  }
];

export const POR_QUE_ELEGIRNOS_CARDS = [
  { 
    id: "calidad", 
    imageSrc: "/images/proyectos/elegirnos-calidad.png" 
  },
  { 
    id: "puntualidad", 
    imageSrc: "/images/proyectos/elegirnos-puntualidad.png" 
  },
  { 
    id: "tecnologia", 
    imageSrc: "/images/proyectos/elegirnos-tecnologia.png" 
  },
  { 
    id: "seguridad", 
    imageSrc: "/images/proyectos/elegirnos-seguridad.png" 
  }
];

export const NUESTRO_PROCESO_STEPS = [
  { 
    id: "01", 
    dictKey: "planificacion", 
    iconName: "ClipboardList" 
  },
  { 
    id: "02", 
    dictKey: "diseno", 
    iconName: "PenTool" 
  },
  { 
    id: "03", 
    dictKey: "construccion", 
    iconName: "HardHat" 
  },
  { 
    id: "04", 
    dictKey: "entrega", 
    iconName: "CheckSquare" 
  }
];
