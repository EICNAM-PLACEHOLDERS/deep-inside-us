import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WaveParallax from "./WaveParallax";
import Credits from "./Credits";
import Defis from "./Defis";
import Ergo from "./Ergo";
import InputField from "./movai_code/components/InputField";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaveParallax />} ></Route>
        <Route path="/movai" element={<InputField />}></Route>
        <Route path="/ergonomie" element={<Ergo />}></Route>  
        <Route path="/credits" element={<Credits />} ></Route>
        <Route path="/defis" element={<Defis />}></Route>
      </Routes >
    </BrowserRouter >
  );
}
