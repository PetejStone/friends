import React from 'react';
import axios from 'axios';
import './components.css'

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            activeFriend: []
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

    // setUpdateForm = e => {
    //     //console.log(e.target.parentNode.getAttribute('data'))
    //     const data = e.target.parentNode.getAttribute('data')
    //     this.setState({
    //         activeFriend: data
    //     })
    //     this.props.history.push('/update-friend')
    // }
    
    
    render() {
       return (
           <div>
           <div className="friends">
            {this.state.friends.map((friend,index) => 
                <div className="friend" id={friend.id} data={JSON.stringify(friend)} key={index}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={this.deleteFriend}>Delete Friend</button>
                    <button onClick={this.props.setUpdateForm}>Update Friend</button>
                </div>               
                )}
                
            </div>
            <button className="addfriend" onClick={(props) => this.props.history.push('/form')}>Add a Friend</button>
            
            </div>
       );
}
}

export default Friends;