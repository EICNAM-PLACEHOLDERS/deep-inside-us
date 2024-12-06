import "./App.css";
import WaveParallax from "./WaveParallx";
import collineImage from './assets/colline.png';
import DistanceDisplay from "./components/DistanceDisplay";

export default function App() {
  return (
    <div>
      
      <WaveParallax />
       <div>
      {/* Composant de suivi de profondeur */}
      <DistanceDisplay />
      </div>
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
    </div>
  );
}
