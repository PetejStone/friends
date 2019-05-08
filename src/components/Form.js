import React from 'react';
import './components.css'
const Form = props => {
    return (
        <form>
            <label for="full-name">Name:</label>
            <input type="text" id="full-name" required/>
            <label for="age">Age:</label>
            <input type="number" id="age" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" required />
        </form>
    )
}

export default Form;
