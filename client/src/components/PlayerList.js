import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { PlayerListContainer } from "../styles/styles.js";

function PlayerList(props) {
  return (
      <>
      <br/>
  <h2>Top Searched Players</h2>
    <PlayerListContainer>
        
      {props.players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </PlayerListContainer>
    </>
  );
}

export default PlayerList;
