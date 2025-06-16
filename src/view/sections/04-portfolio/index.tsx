import { IPortfolio } from "@/interface/portfolio.interface";
import CarouselPortfolio from "./portfolio-card";

interface PortfolioSectionProps {
  portfolios: IPortfolio[];
}

export default function PortfolioSection({
  portfolios,
}: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-[#1f1f1f] px-6 py-20 text-white"
    >
      <h2 className="mb-10 text-center text-3xl font-bold">Portfolio</h2>
      <CarouselPortfolio portfolios={portfolios} />
    </section>
  );
}
