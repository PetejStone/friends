import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Friends from './components/Friends'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  
  postFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
    .then(res => console.log(res))
    .then(res => alert(`You have successfully added to the list!`))
    .catch(err => console.log(err))
   
   }

  render() {
  return (
    <div className="App">
      <Friends />
        <Form postFriend={this.postFriend} />
    </div>
  );
  }
}

export default App;
