import React, { useState } from 'react'
import { MenuData } from '../../mock-data/MenuData'
import './Navbar.css'

function Navbar() {

    const [hamburger, setHamburger] = useState({clicked: false});

    const handleHamburger = (e) => {
        console.log(!hamburger)
        setHamburger({clicked: !hamburger.clicked})
    }

  return (
    <nav className='NavbarItems'>
        <div className='nav-main'>
            <h1 className='logo'><i className='fas fa-meteor'></i> Eunico Cornelius </h1>
            <div className='menu-icons' onClick={handleHamburger}>
                <i className={hamburger.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
        <ul className={hamburger.clicked ? 'nav-menu active' : 'nav-menu'}>
            {
                MenuData.map((item, index)=>{
                    return <li key={index}><a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a></li>
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar