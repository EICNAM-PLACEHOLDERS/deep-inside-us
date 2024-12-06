import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ergo() {
  const [inputLabel] = useState('Âge : ');
  const [errorText, setError] = useState("");
  const [moduloTested, setModuloTested] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [inputClassnames, setClassnames] = useState("px-4 py-2 border rounded text-gray-700");

  const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const texte = (e.target as HTMLInputElement).value;
    if (Number.isInteger(Number(texte)) && Number(texte) > 0) {
      setError("Nan mais je veux ta date de naissance (jj/mm/aaaa).");
      setClassnames("px-4 py-2 border rounded text-green-800");
    } else if ((/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/gi).test(texte)) {
      if (moduloTested || Number(texte.substring(6, 10)) % 2 === 0) {
        setError("Allez vas-y retente quand même.");
        setClassnames("px-4 py-2 border rounded text-red-800");
        setFinalized(true);
      }
      if (Number(texte.substring(6, 10)) % 2 !== 0) {
        setError("Nan mais je veux que ton année soit paire.");
        setClassnames("px-4 py-2 border rounded text-green-800");
        setModuloTested(true);
      }
    } else if (texte === "") {
      setError("");
    } else {
      setError("Format invalide, essaie encore !");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {!finalized ? (
        <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <fieldset className="flex flex-col space-y-4">
            <label className="text-lg font-medium text-gray-700">{inputLabel}</label>
            <input
              name="date"
              className={inputClassnames}
              onChange={onDateChange}
              placeholder="jj/mm/aaaa"
            />
            <p className="text-sm text-red-500">{errorText}</p>
          </fieldset>
        </form>
      ) : (
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-green-600">
            Félicitations, tu as l'âge requis pour lire ce site !
          </h1>
          <p className="mt-4">
            Merci à <Link to="/credits" className="text-blue-500 underline">ces gens</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
