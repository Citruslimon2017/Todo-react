import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED, TOGGLE_ALL, SWITCH_FLITER } from './actions'
import { combineReducers } from 'redux'

// const initialState = {
//     todos: [{value: '123', Checked: false}]
// }

const initialTodos = []
const initialFilters = [
    {
        name: 'All',
        Active: true
    },
    {
        name: 'Active',
        Active: false
    },
    {
        name: 'Completed',
        Active: false
    }
]


function todos(todos = initialTodos, action){
    switch(action.type){
        case ADD_TODO: //判断是什么类型的action
            return [...todos, {value: action.todoValue, Checked: false}]
        case TOGGLE_TODO:
            return todos.map((todo, index) => {
                if(index === action.todoIndex){
                    return {
                        // value: todo.value,
                        // Checked: !todo.Checked
                        ...todo, Checked: !todo.Checked
                    }
                }
                return todo
            })
        case DELETE_TODO:
            return todos.filter((todo, index) => index !== action.todoIndex)
        case CLEAR_COMPLETED:
            return todos.filter(todo => !todo.Checked)
        case TOGGLE_ALL:
            return todos.map(todo => {
                todo.Checked = action.isChecked 
                return todo
            })
        default:
            return todos
    }
}
function filters( filters = initialFilters, action){
    switch(action.type){
        case SWITCH_FLITER:
            return filters.map((filter, index) => {
                if(index === action.filterIndex) return {...filter, Active: true}
                return {...filter, Active: false}
            })
        default:
            return filters
    }
}
const todoApp = combineReducers({
    todos,
    filters
})

export default todoApp
