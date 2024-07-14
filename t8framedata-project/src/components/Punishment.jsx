// src/components/Punishment.js
import React from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import CharacterNav from './CharacterNav';
import rosterData from '../data/rosterData';
import { motion } from 'framer-motion';
import punisherData from '../data/punisherData';
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faExclamationCircle, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import CharacterTitle from './CharacterTitle';
// import 'react-tooltip/dist/react-tooltip.css'


function Punishment () {
  const { char } = useParams();
  const navigate = useNavigate();

  const selectedChar = rosterData[char];

  if (!selectedChar) {
      return <div>Character {char} not found</div>;
  }
  
  const charName = selectedChar.name;

  const charPunishers = punisherData[char];

  if (!charPunishers) {
    return (
      <div>
        <div className='character-title'>
          <img alt={char} src={`/src/assets/characterthumbs/${char}-512.png`} width={52} height={52}></img>
          <h2>{charName}</h2>
        </div>
        <CharacterNav/>
        <p>Punishment data for {charName} could not be found.</p>
      </div>
    )
  }

  function renderPunisherBody(moves, tableID) {
    const groupedMoves = moves.reduce((acc, move) => {
      const [input, moveName, damage, frames, extra] = move;
      if (!acc[input]) {
        acc[input] = [];
      }
      acc[input].push([moveName, damage, frames, extra]);
      return acc;
    }, {});

    return Object.keys(groupedMoves).map((input, index) => {
      const moves = groupedMoves[input];
      console.log(moves)
      return moves.map((move, moveIndex) => (
        <tr key={`${tableID}-${index}-${moveIndex}`}>
          {moveIndex === 0 && <td rowSpan={moves.length}>{input}</td>}
          {/* Tooltip */}
          <td data-tooltip-id={`move-tooltip-${tableID}-${index}-${moveIndex}`} data-tooltip-content={move[3]} > 
            {move[0]}
            {move[3] && (
              <>
                <FontAwesomeIcon icon={faExclamationCircle} className='info-icon' /> 
                <Tooltip id={`move-tooltip-${tableID}-${index}-${moveIndex}`} effect="solid" className='tooltip-custom'>{move[3]}</Tooltip>
              </>
              )}
          </td>
          <td>{move[1]}</td>
          <td>{move[2]}</td>
        </tr>
      ));
    });
  }

  function renderTable (punisherType, title) {
    if (!charPunishers[punisherType]) return null;
    return (
      <div>
        <h3>{title}</h3>
          <table>
            <thead>
              <tr>
                <th>Startup</th>
                <th>Move</th>
                <th>Damage</th>
                <th>Frames</th>
              </tr>
            </thead>
            <tbody>
              {renderPunisherBody(charPunishers[punisherType],punisherType)}
            </tbody>
          </table>
      </div>
    )
  }

  return (
    <>
    <div className='punishers-div'>

    <CharacterTitle/>
      <CharacterNav/>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5}}
        className='punisher-table-div'
      >
        {renderTable('standing', 'Standing')}
        {renderTable('crouching', 'Crouching')}
        {renderTable('backturned', 'Backturned')}
      </motion.div>

      <div className='punishers-info'>
        <p>A (+) sign next to a move's damage indicates a combo opportunity or a full launch for more damage potential. For more information, visit the <Link to={`/${char}/resources`}>character resources</Link> page.</p>
      </div>
    </div>
    </>
  )
};

export default Punishment;
