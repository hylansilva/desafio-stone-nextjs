import './cardStyle.css'

import React from "react";

export default function Card({children}:{children:React.ReactNode}){
  return(
    <main className='card'>
      {children}
    </main>
  )
}
