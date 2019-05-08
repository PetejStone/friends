import React from 'react';
import axios from 'axios';
import './components.css'

class Friends extends React.Component {
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
           <div className="friends">
            {this.state.friends.map(friend => 
                <div className="friend">
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                
                </div>              
                )}
           </div>
       );
}
}

export default Friends;