import React, { useEffect } from "react";
import "./WaveParallax.css";
import collineImage from './assets/colline.png';

const WaveParallax: React.FC = () => {
  useEffect(() => {
    const wave1 = document.getElementById("wave1")!;
    const wave2 = document.getElementById("wave2")!;
    const wave3 = document.getElementById("wave3")!;
    const wave4 = document.getElementById("wave4")!;
    const boat = document.getElementById("boat")!;
    const diver = document.getElementById("diver")!;

    const handleScroll = () => {
      const value = window.scrollY;
      wave1.style.backgroundPositionX = 400 + value * 4 + "px";
      wave2.style.backgroundPositionX = 300 + value * -4 + "px";
      wave3.style.backgroundPositionX = 200 + value * 2 + "px";
      wave4.style.backgroundPositionX = 100 + value * -2 + "px";

      boat.style.transform = `translateX(-50%) translateY(${value * 0.2}px)`;
      diver.style.transform = `translateX(-50%) translateY(${value * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="wave-container">
        <div className="wave" id="wave1" style={{ "--i": 1 } as React.CSSProperties}></div>
        <div className="wave" id="wave2" style={{ "--i": 2 } as React.CSSProperties}></div>
        <div className="wave" id="wave3" style={{ "--i": 3 } as React.CSSProperties}></div>
        <div className="wave" id="wave4" style={{ "--i": 4 } as React.CSSProperties}></div>
        <div className="boat" id="boat" ></div>
        <div className="diver" id="diver" ></div>
        <div className="sec">
          <h2>Deep Inside Us 🤿</h2>
          <p>Plonger, c’est redécouvrir à quel point nous faisons partie d’un tout. L’océan est le miroir de notre propre corps. Prenons soin des deux.</p>
        </div>
      </section>
      <div className="ocean-background" style={{ backgroundImage: `url(${collineImage})` }}>
        {/* <h2>"La peau de l’océan, c’est sa surface. Elle échange des gaz, régule l’énergie... comme notre peau régule notre température et nous protège du monde extérieur."</h2>
        <h2>"Ces courants marins... ce sont les veines et les artères de l’océan. Comme notre système circulatoire, ils transportent les nutriments et régulent la température de notre planète."</h2>
        <h2>"Et ce phytoplancton ? Ce sont les poumons de l’océan, produisant de l’oxygène et absorbant le CO₂. Tout comme nos poumons, ils maintiennent l’équilibre des gaz indispensables à la vie."</h2>
        <h2>"Saviez-vous que l’eau salée de l’océan et le plasma sanguin partagent presque la même composition chimique ? L’un maintient la vie marine, l’autre équilibre nos cellules."</h2>
        <h2>"La température de l’eau, comme celle de notre corps, doit rester stable pour préserver l’équilibre. Homéostasie thermique, dans l’océan ou dans nos veines, c’est pareil !"</h2>
        <h2>"Ces rivières sous-marines transportent des sédiments et des nutriments, tout comme nos vaisseaux sanguins déplacent le sang, les nutriments et l’oxygène à travers notre corps. Un système de transport parfait."</h2>
        <h2>"L’océan protège la vie, tout comme notre système immunitaire veille sur nous. Chaque élément a son rôle : défense, régulation, protection."</h2>
        <h2>"La pompe thermohaline, c’est le cœur de l’océan. Elle distribue chaleur et nutriments, tout comme notre cœur fait battre la vie en nous. Deux systèmes, un même souffle."</h2> */}
      </div>
    </>
  );
};

export default WaveParallax;
