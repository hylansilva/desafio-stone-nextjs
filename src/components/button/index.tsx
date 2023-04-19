import React from 'react'

import './style.css'
import Image from 'next/image'

import trasnfer from '../../../public/Transfer.png'
import arrowleft from '../../../public/arrow-left.png'

export function GoButton() {
  return (
    <div className='m-top'>
      <button
      disabled
      className='go-btn'
      >
        <Image
          src={trasnfer}
          alt='transfer'
        />
        <p>Converter</p>
      </button>
    </div>
  )
}

export function BackButton(){
  return(
    <div className='m-top'>
      <button
      className='back-btn'
      >
        <Image
          src={arrowleft}
          alt='arrowleft'
        />
        <p>Voltar</p>
      </button>
    </div>
  )
}
