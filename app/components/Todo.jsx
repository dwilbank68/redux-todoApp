import React, { Component, PropTypes } from 'react';
var {connect} = require('react-redux');
import moment from 'moment';
var actions = require('actions');

export class Todo extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         'whatever':{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    renderDate(){
        var {completed, createdAt, completedAt}  = this.props;
        var message = 'Created ';
        var timestamp = createdAt;

        if (completed){
            message = 'Completed ';
            timestamp = completedAt;
        }

        return message + moment
                            .unix(timestamp)
                            .format('MMM Do YYYY @ h:mm a');
    }

    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;

        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        return (
            <div    onClick={()=>{
                dispatch(actions.startToggleTodo(id,!completed));
            }}
                    className={todoClassName}>
                <div>
                    <input type="checkbox" checked={completed} readOnly="true"/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{this.renderDate()}</p>
                </div>

            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default connect( )(Todo);