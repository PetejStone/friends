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
  //   axios.post('http://localhost:5000/friends', friend)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
    console.log(`it's working`)
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
