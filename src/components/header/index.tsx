import React from "react";

import './headerStyle.css'

import Image from 'next/image'

import logo from '../../../public/logo.png'
import { FormatedDate } from "@/utils/formated-date";
import { FormatedHours } from "@/utils/fornatedHours";

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
        <h3>{FormatedDate()}    |     {FormatedHours()} UTC</h3>
      <p>Dados de câmbio disponibilizados pela Morningstar.</p>
    </div>
    </header>
  );
}
