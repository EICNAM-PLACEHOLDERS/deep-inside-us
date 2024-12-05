// src/movai_code/components/Character.tsx
import React from 'react';

interface CharacterProps {
  char: string;
}

const Character: React.FC<CharacterProps> = React.memo(({ char }) => {
  console.log('Rendering character:', char);
  return <span>{char}</span>;
});

export default Character;
