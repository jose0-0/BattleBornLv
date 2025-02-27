import Hero from "./components/Hero";
import Cards from "./components/Cards";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Hero />
      <Cards />
    </main>
  );
};

export default App;
