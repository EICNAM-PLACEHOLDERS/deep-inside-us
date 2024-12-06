import React, { useState, useEffect } from 'react';
import { depthTexts } from '../structure/texts';

const DistanceDisplay: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const pixelsPerMeter = 5; // Conversion : 1 mètre = 100px
  const currentDepth = Math.floor(scrollY / pixelsPerMeter);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Trouver le texte correspondant à la profondeur actuelle
  const currentText = depthTexts
    .slice()
    .reverse()
    .find(({ depth }) => currentDepth >= depth)?.text;

  return (
    <div>
      {/* Distance affichée dynamiquement */}
      <div className="fixed top-10 left-10 bg-black bg-opacity-70 text-white py-2 px-4 rounded-lg text-lg" >
        Profondeur actuelle : {currentDepth}m
      </div>

      {/* Affichage conditionnel du texte correspondant */}
      {currentText && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xl font-bold py-4 px-6 rounded-lg" style={{ zIndex: 1000 }}>
          {currentText}
        </div>
      )}
    </div>
  );
};

export default DistanceDisplay;
