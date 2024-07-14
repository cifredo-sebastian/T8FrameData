import React from "react";
import YouTubePlayer from "./YoutubePlayer";

function YoutubeList ({list}) {

    return (
        <div className='resources-youtube-list'>
            {list.map((key) => {
            const link = key
            return (
                <YouTubePlayer key={key} url={link} />
            )
            })}
        </div>    
    )
}

export default YoutubeList