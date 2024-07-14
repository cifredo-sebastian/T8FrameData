import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar () {
    const navigate = useNavigate();


    return (
        <>
            <div className='navbar-div' onClick={() => navigate('/')}>
                {/* <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink> */}
                <img src="/assets/t8s-logo2.png" className='navbar-logo'></img>
                {/* <h2>TekkenSource</h2> */}
            </div>
        </>
    )
}

export default Navbar