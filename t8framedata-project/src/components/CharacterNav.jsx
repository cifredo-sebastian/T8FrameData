import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

function CharacterNav () {
    const navigate = useNavigate();
    const { char } = useParams();


    return (
        <>
            <div className='characternav-div'>
                <NavLink to={`/${char}/framedata`} className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}>Frame Data</NavLink>
                <NavLink to={`/${char}/punishment`} className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}>Punishment</NavLink>
                <NavLink to={`/${char}/resources`} className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}>Resources</NavLink>
            </div>
        </>
    )
}

export default CharacterNav