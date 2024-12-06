import React from "react";
import "./Credits.css";
import collineImage from "./assets/colline.png";

const images = {
  tristant: "https://via.placeholder.com/150/FF6F61/FFFFFF?text=Tristant",
  germain: "https://via.placeholder.com/150/6F61FF/FFFFFF?text=Germain",
  batiste: "https://via.placeholder.com/150/FF61FF/FFFFFF?text=Batiste",
  marine: "https://via.placeholder.com/150/61FF6F/FFFFFF?text=Marine",
  lucie: "https://via.placeholder.com/150/FFD761/FFFFFF?text=Lucie",
  bastien: "https://via.placeholder.com/150/61FFD7/FFFFFF?text=Bastien", // Image de Bastien
};

const Credits: React.FC = () => {
  return (
    <div className="credits-container">
      <h1 className="text-white">🎉 Crédits 🎉</h1>
      <br />
      <div className="credits-list">
        <div className="credits-item" data-name="🎸🦆">
          <img src={images.tristant} alt="Tristan" className="credits-avatar" />
          <h2>Tristan 🎸🦆</h2>
          <p>Maître de la guitare et fan des canards 🦆.</p>
        </div>
        <div className="credits-item" data-name="🎵⚡">
          <img src={images.germain} alt="Germain" className="credits-avatar" />
          <h2>Germain 🎵⚡</h2>
          <p>Amoureux de la musique et des boissons énergisantes ⚡.</p>
        </div>
        <div className="credits-item" data-name="🎵🎮">
          <img src={images.batiste} alt="Baptiste" className="credits-avatar" />
          <h2>Baptiste 🎵🎮</h2>
          <p>Passionné par la musique et les jeux vidéo 🎮.</p>
        </div>
        <div className="credits-item" data-name="🌊💖">
          <img src={images.marine} alt="Marine" className="credits-avatar" />
          <h2>Marine 🌊💖</h2>
          <p>Un océan d'idées et de créativité 💖.</p>
        </div>
        <div className="credits-item" data-name="🎸🛹">
          <img src={images.lucie} alt="Lucie" className="credits-avatar" />
          <h2>Lucie 🎸🛹</h2>
          <p>Accro à la guitare et au skate 🛹.</p>
        </div>
        <div className="credits-item" data-name="🚀📚">
          <img src={images.bastien} alt="Bastien" className="credits-avatar" />
          <h2>Bastien 🚀📚</h2>
          <p>Passionné par la science et les livres 📚.</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
