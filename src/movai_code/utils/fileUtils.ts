// src/movai_code/utils/fileUtils.ts
export const saveToFile = (input: string) => {
  const fileData = { input: input };
  localStorage.setItem('inputData', JSON.stringify(fileData));  // Sauvegarde dans le localStorage
};

// Fonction pour lire depuis le localStorage
export const loadFromFile = (): string => {
  const savedData = localStorage.getItem('inputData');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData.input || '';  // Retourne le texte si disponible
  }
  return '';  // Retourne une chaîne vide si rien n'est sauvegardé
};
