import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Media from "./components/media/Media";
import About from "./components/about/About";
import { skillData } from "./data/data";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8">
      <Navbar />
      <Media />
      <main>
        <Intro />
        <About />
        <Skills skillData={skillData} />
      </main>
    </div>
  );
}

export default App;
