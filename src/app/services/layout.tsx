import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Web & E-Commerce Services | MaxSolutionz",
  description: "Specialized in high-performance WordPress design, WooCommerce optimization, strategic digitalization, and full-stack development for enterprise growth.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
