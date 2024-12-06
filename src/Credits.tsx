import React from "react";
import "./Credits.css";

const images = {
  tristant: "https://via.placeholder.com/150/FF6F61/FFFFFF?text=Tristant",
  germain: "https://via.placeholder.com/150/6F61FF/FFFFFF?text=Germain",
  batiste: "https://via.placeholder.com/150/FF61FF/FFFFFF?text=Batiste",
  marine: "https://via.placeholder.com/150/61FF6F/FFFFFF?text=Marine",
  lucie: "https://via.placeholder.com/150/FFD761/FFFFFF?text=Lucie",
  bastien: "https://via.placeholder.com/150/61FFD7/FFFFFF?text=Bastien",
};

const Credits: React.FC = () => {
  return (
    <div className="credits-container">
      <h1 className="text-white">🎉 Crédits 🎉</h1>
      <br/>
      <div className="credits-list">
        {Object.entries(images).map(([person, imageUrl]) => (
          <div
            key={person}
            className="credits-item"
            onClick={() => playSound(person)}
          >
            <img src={imageUrl} alt={person} className="credits-avatar" />
            <h2>
              {person.charAt(0).toUpperCase() + person.slice(1)}{" "}
              {person === "tristant" && "🎸🦆"}
              {person === "germain" && "🎵⚡"}
              {person === "batiste" && "🎵🎮"}
              {person === "marine" && "🌊💖"}
              {person === "lucie" && "🎸🛹"}
              {person === "bastien" && "🚀📚"}
            </h2>
            <p>
              {person === "tristant" && "Maître de la guitare et fan des canards 🦆"}
              {person === "germain" && "Amoureux de la musique et des boissons énergisantes ⚡"}
              {person === "batiste" && "Passionné par la musique et les jeux vidéo 🎮"}
              {person === "marine" && "Un océan d'idées et de créativité 💖"}
              {person === "lucie" && "Accro à la guitare et au skate 🛹"}
              {person === "bastien" && "Passionné par la science et les livres 📚"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
