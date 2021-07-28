import React from 'react'
import FLIP from './FLIP'
import IB from './IB'
import Macro from './Macro'
import Micro from './Micro'

export default function Demos() {
  return (
    <div className="relative bg-white lg:overflow-hidden">
      <Macro />
      <Micro />
      <IB />
      <FLIP />
    </div>
  )
}
