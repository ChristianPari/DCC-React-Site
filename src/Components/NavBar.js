// packages
import React from 'react'

// components
import List from './List'

export default function NavBar(props) {
  const Items = [
    {title: 'Welcome'},
    {title: 'Our Faith & Vision'}, // faith and vision
    {title: 'About Us'}, // about us & history
    {title: 'Services & Studies'}, // services & studies
    {title: 'Events & Youth Activites'}, // youth & events
    {title: 'Missions'},
    {title: 'Resources'},
    {title: 'Contact Us'}
  ];

  return (
    <nav
    className='NavBar'
    style={{...props.style} || {}}
    >
      <List type='ul' items={Items} style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}/>
    </nav>
  )
}