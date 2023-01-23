import React from 'react'
import Menu from './Menu'

export default function Fcomponent(props) {
  return (
    <div>
      <h1> Hello, {props.name}</h1>
      <Menu />
    </div>
  )
}
