import ProjectCard from "./components/ProjectCard";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="gradient-circle"></div>
      <Landing />
      <ProjectCard />
      <Footer />
    </main>
  );
}
