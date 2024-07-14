import React from "react";
import rosterData from '../data/rosterData';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

function CharacterTitle ({}){
    const navigate = useNavigate();
    const { char } = useParams()
    
    const selectedChar = rosterData[char];

    if (!selectedChar) {
        return <div>Character {char} not found</div>;
    }
  
     const charName = selectedChar.name;

    return (
        <div className='character-title' onClick={() => navigate('/')}>
            <img alt={char} src={`/src/assets/characterthumbs/${char}-512.png`} width={52} height={52}></img>
            <h2>{charName}</h2>
        </div>
    )
}

export default CharacterTitle