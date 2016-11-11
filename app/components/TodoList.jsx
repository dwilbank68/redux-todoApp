import React, { Component, PropTypes } from 'react';

var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends Component {

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }

    renderTodos(){
        var {todos, showCompleted, searchText} = this.props;

        var filteredTodos = TodoAPI
            .filterTodos(todos, showCompleted, searchText);

        if (filteredTodos.length === 0) {
            return (
                <p className="container__message">
                    Nothing To Do
                </p>
            )
        }

        return filteredTodos.map((todo)=>{
            return (
                <Todo key={todo.id}  {...todo} />
            );
        });

    }

}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default connect(
    state  => { return state; }
)(TodoList);