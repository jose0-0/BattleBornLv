import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CeramicCoatings from "./Pages/Ceramic-Coatings/CeramicCoatings";
import DetailPackages from "./Pages/Detail-Packages/DetailPackages";
import AdditionalServices from "./Pages/AdditionalServices";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <main className="relative min-h-full w-full overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
          <Route path="/detail-packages" element={<DetailPackages />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
