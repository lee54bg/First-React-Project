import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createToDo } from './actions';
import './NewToDoForm.css';

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your New To Do here."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button
                // new-todo-button properties
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue);
                    
                    if(!isDuplicateText) {
                        onCreatePressed(inputValue);
                    
                        // Empty the string
                        setInputValue('');

                    }
                }}

                className="new-todo-button">
                Create To-Do
            </button>
        </div>
    );
};

// state is an object that represents the whole entire
// Redux state
const mapStateToProps = state => ({
    todos: state.todos,
});


// dispatch is a function that allows our functions to 
// trigger actions
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);