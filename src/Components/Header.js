// packages
import React from 'react'

// components
import Heading from './Heading'
import NavBar from './NavBar'

export default function Header(props) {
  return (
    <div
    className='Header'
    style={{...props.style } || {}}
    >
      <Heading />
      <NavBar />
    </div>
  )
}