import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/inner";
import { ProductDiagram } from "@/components/diagrams";
import { productDetails, productSlugs } from "@/lib/products";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = productDetails[slug];
  if (!d) return {};
  return { title: d.eyebrow.split("·").pop()?.trim(), description: d.subtitle };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = productDetails[slug];
  if (!data) notFound();
  return <DetailPage data={data} diagram={<ProductDiagram slug={slug} />} />;
}
