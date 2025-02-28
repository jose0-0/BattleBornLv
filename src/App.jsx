import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CeramicCoatings from "./Pages/CeramicCoatings";
import DetailPackages from "./Pages/DetailPackages";
import AdditionalServices from "./Pages/AdditionalServices";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
          <Route path="/detail-packages" element={<DetailPackages />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
