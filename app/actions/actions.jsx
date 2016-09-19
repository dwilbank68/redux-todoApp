import firebase, {firebaseRef} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText)=>{
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

////////////////////// ADD_TODOS ////////////////////

export var startAddTodos = ()=>{
    return (dispatch, getState) =>{
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value')
                .then((snapshot)=>{
                        var todosObj = snapshot.val() || {};
                        var keys = Object.keys(todosObj);
                        var todos = keys.map((key)=>{
                            return {
                                id:key,
                                ...todosObj[key]
                            }
                        })
                        dispatch(addTodos(todos))
                    },
                    (e)=>{
                        console.log('unable',e);
                    }
                )

    }
}

export var addTodos = (todos)=>{
    return {
        type: 'ADD_TODOS',
        todos: todos
    }
}

//////////////// ADD_TODO ///////////////

export var startAddTodo = (text)=>{
    return (dispatch, getState)=>{

        var todo = {
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }
        var todoRef = firebaseRef
                            .child('todos')
                            .push(todo);

        return todoRef.then(()=>{
            dispatch(addTodo({
                ...todo, id:todoRef.key
            }));
        })

    }
}

export var addTodo = (todo)=>{
    return {
        type: 'ADD_TODO',
        todo
    }
}

///////////// UPDATE_TODO //////////////////

export var startToggleTodo = (id, completed)=>{
    return (dispatch, getState) => {

        var todoRef = firebaseRef.child('todos/'+id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef
                .update(updates)
                .then(()=>{
                    dispatch(updateTodo(id, updates));
                });

    }
}

export var updateTodo = (id, updates)=>{

    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

///////////////////// TOGGLE_SHOW_COMPLETED ///////////////////////

export var toggleShowCompleted = ()=>{
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}