import React from 'react';

const TodoSearch = React.createClass({

    handleSearch(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    },

    render() {
        return (
            <div className="container__header">
                <div>
                    <input type="search"
                            ref="searchText"
                            placeholder="Search Todos"
                            onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                                ref="showCompleted"
                                onChange={this.handleSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
});

export default TodoSearch;
