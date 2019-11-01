import React from 'react';
import axios from "axios";

function PlayerCard(props){

    const player = props.player;

    return(
        <>
        <h2>{player.name}</h2>
        <h3>{player.country}</h3>
        <h4>{player.searches}</h4>
        </>
    )
}

export default PlayerCard;