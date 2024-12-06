import './App.css'
import { Link } from 'react-router-dom';

export default function Defis() {
  return (
    <div>
      <div className='flex flex-col'>
        <Link to="/movai">MOVAI CODE 2024</Link>
        <Link to="/ergonomie">L'ergonomie : simplifier pour mieux vivre.</Link>
        <Link to="/credits">My credit page so amazing</Link>
        <Link to="http://141.94.237.226:3000">Mets tes binocles!</Link>
      </div>
    </div>
  )
}