import React from 'react'
import "./MusicCard.css";

function MusicCard({title,channel,image}) {
    return (
        <div className="musicpost">
        <div className="musicCard">
        <img className="musicCard__thumbnail"  src={image} alt="" />
        <div className="musicCard__info">
            <div className="musicCard__text">
<h4>{title}</h4>
<p>{channel}</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default MusicCard
