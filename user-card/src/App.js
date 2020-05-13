import React from 'react';
import axios from "axios";
import UserCard from "./Components/card";
import Followers from "./Components/followers";
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: "Taylor-Wise",
      users: [],
      followers: []
    
    }
  }

  componentDidMount() {
    console.log("Mount Successful");
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then (response => {
      this.setState({
        users: response.data
      })
    })
    .catch(err => {
      console.log(err)
    });

      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then (response => {
        console.log("followers", response);
        this.setState({
          followers: response.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  }

  render (){
  return (
    <div className="App">
      <header className="App-header">
      <h1>GitHub Users!</h1>
      </header>
      <div>
        <UserCard followers={this.state.followers} users={this.state.users}/>
      </div>
    </div>
  );
}
}

export default App;
