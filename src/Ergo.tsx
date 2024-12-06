import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

export default function Ergo() {
  const [inputLabel, setInputLabel] = useState('Âge : ');
  const [errorText, setError] = useState("");
  const [moduloTested, setModuloTested] = useState(false);
  const [finalized, setFinalized] = useState(false);
  const [inputClassnames, setClassnames] = useState("px-2 rounded text-gray-600");

  const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const texte = (e.target as HTMLInputElement).value;
    if (Number.isInteger(Number(texte)) && Number(texte) > 0) {
      setError("Nan mais je veux ta date de naissance (jj/mm/aaaa).");
      setClassnames(`px-2 rounded text-green-800`);
    }
    else if ((/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/gi).test(texte)) {
      if (moduloTested || Number(texte.substring(6, 10)) % 2 == 0) {
        setError("Allez vas y retente quand même");
        setClassnames(`px-2 rounded text-red-800`);
        setFinalized(true);
      }
      if (Number(texte.substring(6, 10)) % 2 != 0) {
        setError("Nan mais je veux que ton année soit paire");
        setClassnames(`px-2 rounded text-green-800`);
        setModuloTested(true);
      }
    }
    else if (texte == "")
      setError("");
    else
      setError("");
  };

  return (
    <div className='bg-gradient-to-br from-red-700 to-black min-h-screen'>
      {!finalized && <form className='mx-20'>
        <fieldset className='flex flex-col'>
          <fieldset className='flex flex-col'>
            <label className='m-2'>{inputLabel}</label>
            <input name='date' className={inputClassnames} onChange={onDateChange} placeholder='Oui ?' />
            <p className='mt-1 xs text-red-400'>{errorText}</p>
          </fieldset>
        </fieldset>
      </form>}
      {finalized &&
        <div>
          <h1>Félictations, tu as l'âge requis pour lire ce site, merci à <Link to={"/credits"}>ces gens</Link></h1>
        </div>
      }
    </div>
  )
}