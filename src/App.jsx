import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Cards />
    </main>
  );
};

export default App;
