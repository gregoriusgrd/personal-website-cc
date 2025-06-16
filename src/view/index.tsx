import Navbar from "@/components/navbar";
import HeroSection from "./sections/01-hero";
import AboutSection from "./sections/02-about";
import SkillsSection from "./sections/03-skills";
import PortfolioSection from "./sections/04-portfolio";
import ExperienceSection from "./sections/05-experience";
import TestimonialsSection from "./sections/06-testimonials";
import ContactSection from "./sections/07-contact";

import { fetchPortfolioService } from "@/service/portfolio.service";

export default async function HomeView() {
    const portfolios = await fetchPortfolioService();
    return(
        <main>
          <Navbar />  
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection portfolios={portfolios} />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
    )
}