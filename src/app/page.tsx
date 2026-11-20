import {
  Navbar,
  Hero,
  About,
  SkillsExperience,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <SkillsExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
