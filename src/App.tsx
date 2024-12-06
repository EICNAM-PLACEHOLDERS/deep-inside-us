import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import WaveParallax from "./WaveParallax";
import Credits from "./Credits";
import Defis from "./Defis";
import Ergo from "./Ergo";
import InputField from "./movai_code/components/InputField";
import ScrollToTopButton from "./ScrollToTopButton";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar placée ici */}
      <Routes>
        <Route path="/" element={<WaveParallax />} />
        <Route path="/movai" element={<InputField />} />
        <Route path="/ergonomie" element={<Ergo />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/defis" element={<Defis />} />
      </Routes>
      <ScrollToTopButton /> 
    </BrowserRouter>
  );
}
