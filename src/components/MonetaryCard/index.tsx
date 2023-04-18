import React from 'react'
import GoButton from '../button'

import './style.css'
import Radios from '../radios'

export default function MonetaryCard() {
  return (
    <div>
        <div className='inputs-wrapper'>
          <div>
          <p className='p-text '>Dolar</p>
            <input className='input-wrapper right' type='number' placeholder='$ 1,00'/>
          </div>
          <div>
          <p className='p-text left'>Taxa do Estado</p>
            <input className='input-wrapper left' type='number' placeholder='0 %'/>
          </div>
        </div>
        <Radios/>
      <GoButton/>
    </div>
  )
}
