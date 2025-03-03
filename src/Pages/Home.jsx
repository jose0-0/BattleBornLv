import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import MissionStatement from "../components/MissionStatement";
import Footer from "../components/Footer";
import ServiceableAreas from "../components/ServiceableAreas";
const Home = () => {
  return (
    <main className="relative min-h-full w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Cards />
      <MissionStatement />
      <ServiceableAreas />
      <Footer />
    </main>
  );
};

export default Home;
