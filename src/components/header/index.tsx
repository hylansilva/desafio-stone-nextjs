
import './headerStyle.css'

import Image from 'next/image'

import logo from '../../../public/logo.png'

export default function Header(){

  return(
    <header>
      <div className="logo">
      <Image
      src={logo}
      alt='macaco chupando manga'
      />
    </div>
    <div className="text">
        <h3>   |    UTC</h3>
      <p>Dados de câmbio disponibilizados pela Morningstar.</p>
    </div>
    </header>
  );
}
