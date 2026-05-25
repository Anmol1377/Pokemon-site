import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { FeaturedPokemon } from "./components/FeaturedPokemon";
import { PokemonMarquee } from "./components/PokemonMarquee";
import { Features } from "./components/Features";
import { HowItPlays } from "./components/HowItPlays";
import { BattlePreview } from "./components/BattlePreview";
import { EvolutionShowcase } from "./components/EvolutionShowcase";
import { ProfessorOak } from "./components/ProfessorOak";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <FeaturedPokemon />
        <PokemonMarquee />
        <Features />
        <BattlePreview />
        <HowItPlays />
        <EvolutionShowcase />
        <ProfessorOak />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
