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
      <h1>🎉 Crédits 🎉</h1>
      <img src={collineImage} alt="Colline" className="credits-image" />
      <div className="credits-list">
        {githubData.map((user) => (
          <div key={user.id} className="credits-item" onClick={() => playSound(user.login)}>
            <img src={user.avatar_url} alt={user.login} className="credits-avatar" />
            <h2>{user.login}</h2>
            <p>GitHub ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;