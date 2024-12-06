import React, { useEffect, useState } from "react";
import "./Credits.css";
import collineImage from "./assets/colline.png";

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
}

// Example GitHub usernames fetched
const users = ["lilierd", "bc-ts", "svitac6", "lege0053", "MrHeddy", "Darkiooss"];

// If you want to keep the sounds logic, ensure you have a mapping for these users.
// For now, let's just log when we attempt to play a sound.
const playSound = (person: string) => {
  console.log(`Attempting to play sound for ${person}`);
};

const Credits: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubUser[]>([]);

  useEffect(() => {
    // Fetch all users data concurrently
    Promise.all(
      users.map((user) =>
        fetch(`https://api.github.com/users/${user}`).then((response) => response.json())
      )
    )
      .then((data: GitHubUser[]) => {
        setGithubData(data);
      })
      .catch((error) => console.error("Error fetching GitHub users:", error));
  }, []);

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