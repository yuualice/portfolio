import ProjectCard from "./components/ProjectCard";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <div className="gradient-circle"></div>
      <Landing />
      <Experience />
      <ProjectCard />
      <Footer />
    </main>
  );
}
