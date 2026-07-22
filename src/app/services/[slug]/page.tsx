import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/inner";
import { ServiceDiagram } from "@/components/diagrams";
import { serviceDetails, serviceSlugs, serviceCatalogue } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = serviceDetails[slug];
  if (!d) return {};
  return { title: serviceCatalogue.find((s) => s.slug === slug)?.name, description: d.subtitle };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceDetails[slug];
  if (!data) notFound();
  return <DetailPage data={data} diagram={<ServiceDiagram slug={slug} />} heroSplit />;
}
