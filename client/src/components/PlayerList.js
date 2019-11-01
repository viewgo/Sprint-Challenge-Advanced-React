import React from 'react';
import axios from "axios";
import PlayerCard from "./PlayerCard";
import PlayerChart from "./PlayerChart";

function PlayerList(props){

    return(
        <>PlayerList
        <PlayerChart players={props.players}/>
        {props.players.map(player => (
            
            <PlayerCard key={player.id} player={player}/>
        ))}
        </>
    )
}

export default PlayerList;