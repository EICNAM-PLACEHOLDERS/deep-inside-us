import React, { useEffect, useState } from "react";
import "./Credits.css";

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
}

const users = ["lilierd", "bc-ts", "svitac6", "lege0053", "MrHeddy", "Darkiooss"];

const playSound = (person: string) => {
  console.log(`Attempting to play sound for ${person}`);
};

const Credits: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(import.meta.env.VITE_GIT_TOKEN)
    Promise.all(
      users.map((user) =>
        fetch(`https://api.github.com/users/${user}`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_GIT_TOKEN}`
          }
        })
          .then((response) => response.json())
      )
    )
      .then((data: GitHubUser[]) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="credits-container">
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }

  const mrHeddyUser = githubData.find((data) => data.login === "MrHeddy");
  const darkioossUser = githubData.find((data) => data.login === "Darkiooss");
  const bctsUser = githubData.find((data) => data.login === "bc-ts");
  const legeUser = githubData.find((data) => data.login === "lege0053");
  const svitacUser = githubData.find((data) => data.login === "Svitac6");
  const lilierdUser = githubData.find((data) => data.login === "Lilierd");

  return (
    <div className="credits-container">
      <h1 className="text-white">🎉 Crédits 🎉</h1>
      <br />
      <div className="credits-list">
        {mrHeddyUser && (
          <a href="https://github.com/MrHeddy" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🎸🦆" onClick={() => playSound(mrHeddyUser.login)}>
              <img src={mrHeddyUser?.avatar_url} alt="Tristan" className="credits-avatar" />
              <h2>Tristan 🎸🦆</h2>
              <p>Maître de la guitare et fan des canards 🦆.</p>
            </div>
          </a>
        )}
        {darkioossUser && (
          <a href="https://github.com/Darkiooss" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🎵⚡" onClick={() => playSound(darkioossUser.login)}>
              <img src={darkioossUser?.avatar_url} alt="Germain" className="credits-avatar" />
              <h2>Germain 🎵⚡</h2>
              <p>Amoureux de la musique et des boissons énergisantes ⚡.</p>
            </div>
          </a>
        )}
        {bctsUser && (
          <a href="https://github.com/bc-ts" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🎵🎮" onClick={() => playSound(bctsUser.login)}>
              <img src={bctsUser?.avatar_url} alt="Baptiste" className="credits-avatar" />
              <h2>Baptiste 🎵🎮</h2>
              <p>Passionné par la musique et les jeux vidéo 🎮.</p>
            </div>
          </a>
        )}
        {legeUser && (
          <a href="https://github.com/lege0053" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🌊💖" onClick={() => playSound(legeUser.login)}>
              <img src={legeUser?.avatar_url} alt="Marine" className="credits-avatar" />
              <h2>Marine 🌊💖</h2>
              <p>Un océan d'idées et de créativité 💖.</p>
            </div>
          </a>
        )}
        {svitacUser && (
          <a href="https://github.com/svitac6" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🎸🛹" onClick={() => playSound(svitacUser.login)}>
              <img src={svitacUser?.avatar_url} alt="Lucie" className="credits-avatar" />
              <h2>Lucie 🎸🛹</h2>
              <p>Accro à la guitare et au skate 🛹.</p>
            </div>
          </a>
        )}
        {lilierdUser && (
          <a href="https://github.com/lilierd" target="_blank" rel="noopener noreferrer">
            <div className="credits-item" data-name="🚀📚" onClick={() => playSound(lilierdUser.login)}>
              <img src={lilierdUser?.avatar_url} alt="Bastien" className="credits-avatar" />
              <h2>Bastien 🚀📚</h2>
              <p>Passionné par la science et les livres 📚.</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Credits;