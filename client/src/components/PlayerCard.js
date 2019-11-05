import React from "react";
import axios from "axios";
import { PlayerCardContainer } from "../styles/styles.js";

function PlayerCard(props) {
  const player = props.player;

  return (
    <PlayerCardContainer>
      <h2>{player.name}</h2>
      <h3>{player.country}</h3>
      <h4>Searches: {player.searches}</h4>
    </PlayerCardContainer>
  );
}

export default PlayerCard;
