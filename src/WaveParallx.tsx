import React, { useEffect } from "react";
import "./WaveParallax.css";

const WaveParallax: React.FC = () => {
  useEffect(() => {
    const wave1 = document.getElementById("wave1")!;
    const wave2 = document.getElementById("wave2")!;
    const wave3 = document.getElementById("wave3")!;
    const wave4 = document.getElementById("wave4")!;

    const handleScroll = () => {
      const value = window.scrollY;
      wave1.style.backgroundPositionX = 400 + value * 4 + "px";
      wave2.style.backgroundPositionX = 300 + value * -4 + "px";
      wave3.style.backgroundPositionX = 200 + value * 2 + "px";
      wave4.style.backgroundPositionX = 100 + value * -2 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="wave-container">
      <div className="wave" id="wave1" style={{ "--i": 1 } as React.CSSProperties}></div>
      <div className="wave" id="wave2" style={{ "--i": 2 } as React.CSSProperties}></div>
      <div className="wave" id="wave3" style={{ "--i": 3 } as React.CSSProperties}></div>
      <div className="wave" id="wave4" style={{ "--i": 4 } as React.CSSProperties}></div>
      <div className="sec">
        <h2>Deep Inside Us</h2>
        <p>
            Plonger, c’est redécouvrir à quel point nous faisons partie d’un tout. L’océan est le miroir de notre propre corps. Prenons soin des deux.
        </p>
      </div>
    </section>
  );
};

export default WaveParallax;
