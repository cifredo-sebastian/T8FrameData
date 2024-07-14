import React from "react";
import rosterData from "../data/rosterData";
import Card from "./Card";
import { motion } from 'framer-motion';

function Roster () {
    const [roster, setRoster] = React.useState(rosterData)

    return (
        <div className="roster-div">
            {Object.keys(roster).map((key) => {
                const character = roster[key]
                return (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5 }}
                    >
                        <Card key={key} name={character.name} route={character.route}/>
                    </motion.div>
                    
                )
            })}
        </div>
    )


}

export default Roster