// src/components/Character.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fetchFrameData from '../utils/fetchFrameData';
import FrameDataTable from './FrameDataTable';
import rosterData from '../data/rosterData';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import CharacterNav from './CharacterNav';
import CharacterTitle from './CharacterTitle';
import LazyLoad from 'react-lazyload';


function Character () {
    const { char } = useParams();
    const navigate = useNavigate();
    const [frameData, setframeData] = React.useState();

    const selectedChar = rosterData[char];

    if (!selectedChar) {
        return <div>Character {char} not found</div>;
    }
    
    const charName = selectedChar.name;
    const sheetName = selectedChar.sheet;
    const randomEmote = selectedChar.emotes[Math.floor(Math.random() * selectedChar.emotes.length)];

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setframeData(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1 }}
                className='character-div'
            >
                <CharacterTitle/>
                
                <CharacterNav/>
                {frameData ? 
                    <FrameDataTable characterFD={frameData}/> : 
                    <div className='fd-loading'> 
                        <FontAwesomeIcon className='fd-loading-spin' icon={faCircleNotch} spin/>
                        <LazyLoad><img src={`/src/assets/characteremotes/${randomEmote}`} className='fd-loading-emote'></img></LazyLoad>
                    </div>
                }
                {/* <div className='fd-loading'> 
                        <FontAwesomeIcon className='fd-loading-spin' icon={faCircleNotch} spin/>
                        <LazyLoad><img src={`/src/assets/characteremotes/${randomEmote}`} className='fd-loading-emote'></img></LazyLoad>
                </div> */}
            </motion.div>   
        </>
    )
  
};

export default Character;
