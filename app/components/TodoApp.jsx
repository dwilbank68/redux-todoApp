import React, { Component, PropTypes } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export class TodoApp extends Component {

    constructor(props){
        super(props);
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(actions.startLogout());
    }

    render() {
        return (
            <div>

                <div className="page-actions">
                    <a  href="#"
                        onClick={this.onLogout}>Logout</a>
                </div>

                <h1 className="page-title">Todo App</h1>
                <div className="row">

                    <div className="columns small-11 medium-6 large-5 small-centered">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default Redux.connect()(TodoApp);