import DOMPurify from 'dompurify';

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

export const sanitizeWithRegex = (input: string): string => {
  const result = input.replace(/[^a-zA-Z0-9 ]/g, '');
  console.log('After sanitizeWithRegex:', result);
  return result;
};


export const trimAndCollapseSpaces = (input: string): string => {
  const result = input.trim().replace(/\s+/g, ' ');
  console.log('After trimAndCollapseSpaces:', result);
  return result;
};


export const purifyHtml = (input: string): string => {
  const result = DOMPurify.sanitize(input);
  console.log('After purifyHtml:', result);
  return result;
};


export const normalizeAccents = (input: string): string => {
  const result = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log('After normalizeAccents:', result);
  return result;
};

export const sanitizeString = (input: string): string => {
  console.log('Original input:', input);

  let sanitized = input;

  sanitized = purifyHtml(sanitized);

  sanitized = sanitizeWithRegex(sanitized);

  sanitized = trimAndCollapseSpaces(sanitized);

  sanitized = normalizeAccents(sanitized);


  console.log('Final sanitized result:', sanitized);
  return sanitized;
};

export const saveToFile = (input: string) => {
  console.log('Saving input to file:', input);
  const sanitizedInput = sanitizeString(input);
  console.log('Sanitized input being saved:', sanitizedInput);
  const fileData = { input: sanitizedInput };
  localStorage.setItem('inputData', JSON.stringify(fileData));
  console.log('Input successfully saved to localStorage.');
};

export const loadFromFile = (): string => {
  console.log('Loading input from localStorage...');
  const savedData = localStorage.getItem('inputData');
  if (savedData) {
    console.log('Raw data loaded from localStorage:', savedData);
    const parsedData = JSON.parse(savedData);
    console.log('Parsed data:', parsedData);
    const sanitizedInput = sanitizeString(parsedData.input || '');
    console.log('Sanitized input after loading:', sanitizedInput);
    return sanitizedInput;
  }
  console.log('No data found in localStorage.');
  return '';
};
