import DOMPurify from 'dompurify';

// Fonction 1 : Échappe les caractères spéciaux HTML
export const escapeHtml = (input: string): string => {
  const result = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  console.log('Après escapeHtml :', result);
  return result;
};

// Fonction 2 : Supprime les caractères non alphanumériques (en dehors des espaces)
export const sanitizeWithRegex = (input: string): string => {
  const result = input.replace(/[^a-zA-Z0-9 ]/g, '');
  console.log('Après sanitizeWithRegex :', result);
  return result;
};

// Fonction 3 : Nettoie les espaces (supprime les espaces inutiles et normalise)
export const trimAndCollapseSpaces = (input: string): string => {
  const result = input.trim().replace(/\s+/g, ' ');
  console.log('Après trimAndCollapseSpaces :', result);
  return result;
};

// Fonction 4 : Purifie le HTML avec DOMPurify
export const purifyHtml = (input: string): string => {
  const result = DOMPurify.sanitize(input);
  console.log('Après purifyHtml :', result);
  return result;
};

// Fonction 5 : Normalise les accents (supprime les accents diacritiques)
export const normalizeAccents = (input: string): string => {
  const result = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log('Après normalizeAccents :', result);
  return result;
};

// Fonction principale pour nettoyer une chaîne de caractères
export const sanitizeString = (input: string): string => {
  console.log('Entrée originale :', input);

  let sanitized = input;

  // Étape 1 : Nettoyage HTML
  sanitized = purifyHtml(sanitized);

  // Étape 2 : Nettoyage des caractères non alphanumériques
  sanitized = sanitizeWithRegex(sanitized);

  // Étape 3 : Nettoyage des espaces
  sanitized = trimAndCollapseSpaces(sanitized);

  // Étape 4 : Suppression des accents
  sanitized = normalizeAccents(sanitized);

  console.log('Résultat final nettoyé :', sanitized);
  return sanitized;
};

// Fonction pour sauvegarder chaque lettre dans le localStorage
// Fonction pour sauvegarder chaque caractère encrypté dans le localStorage
export const saveToFile = (input: string) => {
  console.log('Sauvegarde de l\'entrée dans le localStorage :', input);

  // Nettoyer la chaîne avant de la sauvegarder
  const sanitizedInput = sanitizeString(input);
  console.log('Entrée nettoyée avant sauvegarde :', sanitizedInput);

  // Chiffrer chaque caractère et le stocker comme objet
  const encryptedArray = sanitizedInput.split('').map((char, index) => ({
    id: index,
    encryptedChar: encryptCharacter(char), // Chiffrer chaque caractère
  }));

  localStorage.setItem('encryptedLetters', JSON.stringify(encryptedArray));
  console.log('Lettres encryptées sauvegardées dans le localStorage :', encryptedArray);
};

// Fonction pour charger et déchiffrer les lettres depuis le localStorage
export const loadFromFile = (): string => {
  console.log('Chargement des lettres depuis le localStorage...');
  const savedData = localStorage.getItem('encryptedLetters');
  if (savedData) {
    console.log('Données brutes chargées depuis le localStorage :', savedData);
    const parsedData = JSON.parse(savedData);
    console.log('Données parsées :', parsedData);

    // Déchiffrer chaque caractère et reconstruire la chaîne
    const decryptedString = parsedData
      .map((item: { id: number; encryptedChar: string }) => decryptCharacter(item.encryptedChar))
      .join('');

    console.log('Chaîne déchiffrée :', decryptedString);
    return decryptedString;
  }
  console.log('Aucune donnée trouvée dans le localStorage.');
  return '';
};



// Clé secrète utilisée pour chiffrer/déchiffrer les caractères
const SECRET_KEY = 'secret_key'; // À remplacer par une clé plus sécurisée si nécessaire

// Fonction pour chiffrer un caractère
export const encryptCharacter = (char: string): string => {
  const charCode = char.charCodeAt(0);
  const encryptedCharCode = charCode ^ SECRET_KEY.length; // XOR simple avec la longueur de la clé
  return encryptedCharCode.toString(16); // Convertir en hexadécimal pour stockage
};

// Fonction pour déchiffrer un caractère
export const decryptCharacter = (encryptedChar: string): string => {
  const encryptedCharCode = parseInt(encryptedChar, 16); // Convertir depuis l'hexadécimal
  const decryptedCharCode = encryptedCharCode ^ SECRET_KEY.length; // Inverser le XOR
  return String.fromCharCode(decryptedCharCode);
};


