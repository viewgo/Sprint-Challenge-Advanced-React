import React from 'react';
import './App.css';
import axios from "axios";
import PlayerList from "./components/PlayerList";
import Top from './components/Top';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount(){
     axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log("RESPONSE DATA", response.data);
      this.setState({players: response.data});
      
    })
    .catch(error => {
      console.log("Axios error", error)
    })
  }
 
render(){
  console.log(this.state.players);
  return (
    <div className="App">
      <Top/>
      Hello
      <PlayerList players={this.state.players}/>
    </div>
  );
}
}

export default App;
