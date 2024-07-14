import React from "react";
import YouTubePlayer from "./YoutubePlayer";

function DocsList ({list}) {

    return (
        <div className='resources-docs-list'>
            {Object.keys(list).map((key) => {
            const name = key
            const link = list[key]
            console.log(`name:${name}, link:${link}`)
            return (
                <a href={link} className='resource-link'>{name}</a>                
            )
            })}
        </div>    
    )
}

export default DocsList