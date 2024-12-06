import React from "react";
import "./Credits.css";
import collineImage from './assets/colline.png';

const Credits: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>🎉 Crédits 🎉</h1>
      <img 
        src={collineImage} 
        alt="Colline" 
        style={{ width: "100%", height: "auto", marginBottom: "20px", borderRadius: "10px" }}
      />
      <div style={{ fontSize: "1.5rem" }}>
        <div style={{ margin: "20px 0" }}>
          <h2>Tristant 🎸🦆</h2>
          <p>Maître de la guitare et fan des canards 🦆.</p>
        </div>
        <div style={{ margin: "20px 0" }}>
          <h2>Germain 🎵⚡</h2>
          <p>Amoureux de la musique et des boissons énergisantes ⚡.</p>
        </div>
        <div style={{ margin: "20px 0" }}>
          <h2>Batiste 🎵🎮</h2>
          <p>Passionné par la musique et les jeux vidéo 🎮.</p>
        </div>
        <div style={{ margin: "20px 0" }}>
          <h2>Marine 🌊💖</h2>
          <p>Un océan d'idées et de créativité 💖.</p>
        </div>
        <div style={{ margin: "20px 0" }}>
          <h2>Lucie 🎸🛹</h2>
          <p>Accro à la guitare et au skate 🛹.</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
