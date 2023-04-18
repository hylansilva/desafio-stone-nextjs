import React from 'react'

import './style.css'

export default function Radios() {
  return (
    <div className='form-wrapper'>
      <p>Tipo de Compra</p>
      <div className='form-block'>
        <label>
          <input type="radio" name="gender" value="male" />
          <span>
            Masculino
          </span>
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          <span>
            Feminino
          </span>
        </label>
      </div>
    </div>
  )
}
