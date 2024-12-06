import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WaveParallax from "./WaveParallax";
import collineImage from './assets/colline.png';
import {InputField} from './movai_code/components/InputField';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaveParallax />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
