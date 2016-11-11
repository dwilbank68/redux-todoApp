import React, { Component, PropTypes } from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.task.value;

        if (text.length > 0) {
            dispatch(actions.startAddTodo(text));
            this.refs.task.value = '';
        } else {
            this.refs.task.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
                <form ref="form" className="add-todo-form"
                      onSubmit={this.handleSubmit} >
                    <input type="text" ref="task"
                           placeholder="What do you need to do?"/>
                    <button className="button expanded">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {};
AddTodo.defaultProps = {};

export default connect()(AddTodo);