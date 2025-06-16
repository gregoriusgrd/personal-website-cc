import { IPortfolio } from "@/interface/portfolio.interface";
import PortfolioCard from "./portfolio-card";

interface PortfolioSectionProps {
  portfolios: IPortfolio[];
}

export default function PortfolioSection({ portfolios }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="bg-[#1f1f1f] px-6 py-20 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Portfolio</h2>
      <PortfolioCard portfolios={portfolios} />
    </section>
  );
}
