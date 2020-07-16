import React from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import { removeToDo } from './actions';
import './ToDoList.css';

const ToDoList = ({ todos = [ { text: "Time to start your day" } ], onRemovePressed }) => (
	<div className="list-wrapper">
		<NewToDoForm />
		{todos.map(todo => <ToDoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
	</div>
);

// state is an object that represents the whole entire
// Redux state
const mapStateToProps = state => ({
    todos: state.todos,
});


// dispatch is a function that allows our functions to 
// trigger actions
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeToDo(text))
});



export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);