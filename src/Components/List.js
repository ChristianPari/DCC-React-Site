// packages
import React from 'react'

export default function List(props) {
  const Tag = props.type || 'ul';

  return (
    <Tag id={props.id || ''} className={props.className || ''} style={{...props.style} || {}} >
      {props.items.map(item => 
        <li>{item.title}</li>)}
    </Tag>
  )
}