import React from 'react';
import './components.css'

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             activeFriend: JSON.parse(this.props.activeFriend)
            }
        }
        
    
 postFriend = e => {
        e.preventDefault();
        this.props.postFriend(this.state.friend);
        //console.log(this.state.friend)
    }

    handleChange = e => {
        //console.log(e.target.id)
        //console.log(e.target.value)
        this.setState ({
            friend: {
                ...this.state.friend,
                [e.target.id] : e.target.value
            }
        });
    }

    render() {
    return (
        <form onSubmit={this.updateFriend}>
        {console.log(this.state.activeFriend)}
            <label htmlFor="name">Name:</label>
            <input type="text" 
                    id="name"  
                    onChange={this.handleChange} 
                    placeholder={this.state.activeFriend.length === 0 ? "Name" : this.state.activeFriend[0].name}
                    
                    required/>
            <label htmlFor="age">Age:</label>
            <input type="number" 
                   id="age" onChange={this.handleChange} 
                   placeholder={this.state.activeFriend.length === 0 ? "Age" : this.state.activeFriend[0].age}
                   required/>
            <label htmlFor="email">Email:</label>
            <input type="email" 
                   id="email" 
                   onChange={this.handleChange} 
                   placeholder={this.state.activeFriend.length === 0 ? "Email" : this.state.activeFriend[0].email}
                    required />
            <button className="submit">Submit</button>
            <button className="goback" onClick={(props) => this.props.history.push('/')}>Go Back</button>
        </form>
    )
    }
}

export default UpdateFriend;
