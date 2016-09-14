import React, {
    PropTypes,
} from 'react';

const AddTodo = React.createClass({

    handleSubmit(e){
        e.preventDefault();
        var text = this.refs.task.value;
        if (text.length > 0) {
            this.props.onAddTodo(text);
            this.refs.task.value = '';
        } else {
            this.refs.task.focus();
        }
    },

    render() {
        return (
            <div className="container__footer">
                <form   ref="form"
                        onSubmit={this.handleSubmit}
                        className="add-todo-form">
                    <input  type="text"
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

export default AddTodo;
