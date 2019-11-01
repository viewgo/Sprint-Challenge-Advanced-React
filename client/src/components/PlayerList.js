import React from 'react';
import axios from "axios";
import PlayerCard from "./PlayerCard";

function PlayerList(props){

    return(
        <>PlayerList
        {props.players.map(player => (
            <PlayerCard key={player.id} player={player}/>
        ))}
        </>
    )
}

export default PlayerList;