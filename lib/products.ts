export const products = [
  {
    slug: "tirzepatide-strip",
    name: "Tirzepatide Strip",
    category: "Metabolic",
    description: "Premium dissolvable peptide strip.",
    price: "$399",
  },
  {
    slug: "semaglutide-strip",
    name: "Semaglutide Strip",
    category: "Weight Management",
    description: "Alternative peptide delivery.",
    price: "$349",
  },
  {
    slug: "nad-strip",
    name: "NAD+ Strip",
    category: "Longevity",
    description: "Daily wellness support.",
    price: "$199",
  },
  {
    slug: "pt141-oxytocin-strip",
    name: "PT-141 / Oxytocin",
    category: "Performance",
    description: "Performance wellness strip.",
    price: "$249",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}