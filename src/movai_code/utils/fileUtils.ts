import DOMPurify from 'dompurify';

// Fonction 1: Remplace les caractères dangereux par leurs entités HTML
export const escapeHtml = (input: string): string => {
  const result = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  console.log('After escapeHtml:', result);
  return result;
};

// Fonction 2: Limite la chaîne aux caractères alphanumériques et espaces
export const sanitizeWithRegex = (input: string): string => {
  const result = input.replace(/[^a-zA-Z0-9 ]/g, '');
  console.log('After sanitizeWithRegex:', result);
  return result;
};

// Fonction 3: Élimine les espaces inutiles
export const trimAndCollapseSpaces = (input: string): string => {
  const result = input.trim().replace(/\s+/g, ' ');
  console.log('After trimAndCollapseSpaces:', result);
  return result;
};

// Fonction 4: Nettoie le HTML avec DOMPurify
export const purifyHtml = (input: string): string => {
  const result = DOMPurify.sanitize(input);
  console.log('After purifyHtml:', result);
  return result;
};

// Fonction 5: Normalisation des accents
export const normalizeAccents = (input: string): string => {
  const result = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log('After normalizeAccents:', result);
  return result;
};

// Fonction pour "nettoyer" une chaîne avant sauvegarde et après lecture
export const sanitizeString = (input: string): string => {
  console.log('Original input:', input);

  let sanitized = input;

  // Étape 1: Purifier le HTML
  sanitized = purifyHtml(sanitized);

  // Étape 2: Supprimer les caractères non alphanumériques
  sanitized = sanitizeWithRegex(sanitized);

  // Étape 3: Normaliser les espaces
  sanitized = trimAndCollapseSpaces(sanitized);

  // Étape 4: Normaliser les accents
  sanitized = normalizeAccents(sanitized);

  // Étape 5: Retourner la chaîne
  console.log('Final sanitized result:', sanitized);
  return sanitized;
};

// Fonction pour sauvegarder dans le localStorage
export const saveToFile = (input: string) => {
  console.log('Saving input to file:', input);
  const sanitizedInput = sanitizeString(input); // Nettoyer avant de sauvegarder
  console.log('Sanitized input being saved:', sanitizedInput);
  const fileData = { input: sanitizedInput };
  localStorage.setItem('inputData', JSON.stringify(fileData)); // Sauvegarder dans le localStorage
  console.log('Input successfully saved to localStorage.');
};

// Fonction pour lire depuis le localStorage
export const loadFromFile = (): string => {
  console.log('Loading input from localStorage...');
  const savedData = localStorage.getItem('inputData');
  if (savedData) {
    console.log('Raw data loaded from localStorage:', savedData);
    const parsedData = JSON.parse(savedData);
    console.log('Parsed data:', parsedData);
    const sanitizedInput = sanitizeString(parsedData.input || ''); // Nettoyer après lecture
    console.log('Sanitized input after loading:', sanitizedInput);
    return sanitizedInput;
  }
  console.log('No data found in localStorage.');
  return ''; // Retourner une chaîne vide si rien n'est sauvegardé
};
