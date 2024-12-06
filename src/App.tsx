import { useState } from 'react'
import './App.css'

export default function App() {
  const [inputLabel, setInputLabel] = useState('Âge : ');
  const [errorText, setError] = useState("");
  const [moduloTested, setModuloTested] = useState(false);

  const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const texte = (e.target as HTMLInputElement).value;
    if(Number.isInteger(Number(texte)) && Number(texte) > 0)
      setError("Nan mais je veux ta date de naissance (jj/mm/aaaa).");
    else if((/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/gi).test(texte)) {
      console.log(Number(texte.substring(6,9)) % 10)
      if(Number(texte.substring(6,9)) % 2 != 0)
        setError("Nan mais je veux que ton année soit modulo 2");
      if(moduloTested) {
        setError("Allez vas y retente quand même");
      }
      setModuloTested(true);
    }
    else if(texte == "")
      setError("");
    else
      setError("");
  };

  return (
    <>
      <form>
        <fieldset className='flex flex-col'>
          <fieldset className='flex flex-col'>
            <label className='m-2'>{inputLabel}</label>
            <input name='date' className='px-2' onChange={onDateChange} />
            <p className='mt-1 xs text-red-400'>{errorText}</p>
          </fieldset>
        </fieldset>
      </form>
    </>
  )
}
