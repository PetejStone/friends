import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form';

import Friends from './components/Friends'
import UpdateFriend from './components/UpdateFriend';
import {Route }from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      activeFriend: ''
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

  updateFriend = (friend) => {
  
    console.log(friend[0].id)
    axios
      .put(`http://localhost:5000/friends/${friend[0].id}`, friend)
      .then(res => {
       console.log(res);
       this.setState({ friends: res.data });
       this.props.history.push('/')
      })
      .catch(err => console.log(err));
  };

  setUpdateForm = e => {
    //console.log(e.target.parentNode.getAttribute('data'))
    const data = e.target.parentNode.getAttribute('data')
    this.setState({
        activeFriend: data
    })
    this.props.history.push('/update-friend')
}
   

  render() {
  return (
    <div className="App">
  
      <Route exact path="/" render={(props) => <Friends {...props} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} />} />
       <Route path="/form" render={  (props) => <Form {...props} postFriend={this.postFriend} /> }/> 
       <Route path="/update-friend" render={  (props) => <UpdateFriend {...props} updateFriend={this.updateFriend} activeFriend={`[${this.state.activeFriend}]`} /> }/> 
    </div>
  );
  }
}

export default App;
