import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Media from "./components/media/Media";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto px-8">
      <Navbar />
      <Media />
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
