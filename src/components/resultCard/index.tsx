import { BackButton } from '../button';
import './style.css';

import React from 'react';


export default function ResultCard(){
  return(
    <div>
      <BackButton/>
      <div className="result-text">
        <p className="title">O resultado do calculo é</p>
        <h1 className="result">R$ 500,00</h1>
      </div>
      <div className="specs">
        <p className="result-specs">Compra no<span className='type'>dinheiro</span> e taxa de<span className='tax'>5,3%</span></p>
        <p className="result-specs">Cotação do dólar: <span className='dolarCotation'> $1,00 </span> = <span className='realCotation'>R$ 5,20</span></p>
      </div>
    </div>
  )
}
