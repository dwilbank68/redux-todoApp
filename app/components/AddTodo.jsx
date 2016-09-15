import React from 'react';
var {connect} = require('react-redux');
//import actions from '../actions/actions.jsx';
var actions = require('actions');
console.log('actions', actions);

export var AddTodo = React.createClass({

    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.task.value;

        if (text.length > 0) {
            dispatch(actions.addTodo(text));
            this.refs.task.value = '';
        } else {
            this.refs.task.focus();
        }
    },

    render() {
        return (
            <div className="container__footer">
                <form ref="form"
                      onSubmit={this.handleSubmit}
                      className="add-todo-form">
                    <input type="text"
                           ref="task"
                           placeholder="What do you need to do?"/>
                    <button className="button expanded">
                        Add Todo
                    </button>

                </form>

            </div>
        );
    }
});

export default connect()(AddTodo);
