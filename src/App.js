import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto px-8">
      <Navbar />
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
