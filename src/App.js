import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    
    .then(res => this.setState({friends: res.data}) )
  }

  render() {
  return (
    <div className="App">
      {this.state.friends.map(friend => 
        <div>
          <h2>{friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
        
        )}
    </div>
  );
  }
}

export default App;
