import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Friends from './components/Friends'
import {Route }from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  

   postFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (id) => {
    //console.log('hello')
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
       console.log(res);
       window.location.reload();
       //this.props.history.push('/')
      })
      .catch(err => console.log(err));
  };

   

  render() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Friends {...props} deleteFriend={this.deleteFriend} />} />
       <Route path="/form" render={  (props) => <Form {...props} postFriend={this.postFriend} /> }/> 
    </div>
  );
  }
}

export default App;
