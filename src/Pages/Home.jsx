import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <main className="relative min-h-full w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </main>
  );
};

export default Home;
