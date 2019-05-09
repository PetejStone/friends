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
        .then(res => {console.log(res); this.setState({friends: res.data}) })
        .catch(err => err);
      }
    

    

    deleteFriend = e => {
        this.props.deleteFriend(e.target.parentNode.id)
    }
    
    
    render() {
       return (
           <div>
           <div className="friends">
            {this.state.friends.map((friend,index) => 
                <div className="friend" id={friend.id} key={index}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={this.deleteFriend}>Delete Friend</button>
                </div>               
                )}
                
            </div>
            <button className="addfriend" onClick={(props) => this.props.history.push('/form')}>Add a Friend</button>
           </div>
       );
}
}

export default Friends;