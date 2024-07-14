// src/components/Resources.js
import React from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import CharacterNav from './CharacterNav';
import { motion } from 'framer-motion';
import resourcesData from '../data/resourcesData';
import rosterData from '../data/rosterData';
import CharacterTitle from './CharacterTitle';
import YoutubeList from './YoutubeList';
import DocsList from './DocsList';


function Resources () {

  const { char } = useParams();

  const selectedChar = rosterData[char];

  if (!selectedChar) {
      return <div>Character {char} not found</div>;
  }
  
  const charName = selectedChar.name;

  const charResources = resourcesData[char];

  if (!charResources) {
    return (
      <div>
        <h2>{charName} Punishment</h2>
        <CharacterNav/>
        <p>Resources data for {charName} could not be found.</p>
      </div>
    )
  }

  return (
    <>
      <div className='resources-div'>

        <CharacterTitle/>
        <CharacterNav/>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0}}
          className='resources-sections-div'
        >    

          {charResources.discord ? 
            <div className='resource-card resources-discord'> 
              <h3>Discord Server</h3> 
              <div className='section-divider'></div>
              <a href={charResources.discord} className='resource-link'>{charName} Character Discord</a>
            </div> : null}

            {charResources.docs && Object.keys(charResources.docs).length > 0 ? 
            <div className='resource-card resources-character-guides'> 
              <h3>Character Guides</h3>
              <div className='section-divider'></div>
              <DocsList list={charResources.docs}/>
            </div> : null}

            {charResources.youtube && charResources.youtube.length > 0 ? 
            <div className='resource-card resources-youtube-guides'> 
              <h3>Video Guides</h3>
              <div className='section-divider'></div>
              <YoutubeList list={charResources.youtube}/>
            </div> : null}

        </motion.div>

      <div className='punishers-info'>
        <p>Video guides are naturally subject to be outdated.</p>
      </div>


      </div>
    </>
  )
};

export default Resources;
