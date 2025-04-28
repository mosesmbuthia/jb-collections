import Navbar from './components/navbar/navbar';
import HeroSection from './components/herosection/herosection';
import AllClothesPage from './components/collections/allCollections';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <AllClothesPage />
      </BrowserRouter>
    </>
  );
}

export default App
