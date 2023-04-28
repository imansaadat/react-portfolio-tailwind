import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Media from "./components/media/Media";
import About from "./components/about/About";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8">
      <Navbar />
      <Media />
      <main>
        <Intro />
        <About/>
      </main>
    </div>
  );
}

export default App;
