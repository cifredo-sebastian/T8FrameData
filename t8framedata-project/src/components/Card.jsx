import React from "react";
import { useNavigate } from "react-router-dom";

function Card ({name, route}) {
    const navigate = useNavigate();
    

    return (
        <div className={`character-card ${route}-card`} onClick={() => navigate(`/${route}/framedata`)}>
            <div className="card-img">
                <img alt={name} src={`src/assets/characterthumbs/${route}-512.png`}></img>
            </div>
            <div className="card-name">
                <h5>{name}</h5>
            </div>
        </div>
    )
}

export default Card