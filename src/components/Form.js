import React from 'react';
import './components.css'
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
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
        <form onSubmit={this.postFriend}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="Name" required/>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" onChange={this.handleChange} placeholder="Age" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} placeholder="Email" required />
            <button className="submit">Submit</button>
            <button className="goback" onClick={(props) => this.history.props.push('/')} >Go Back</button>
        </form>
    )
    }
}

export default Form;
