export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const SWITCH_FLITER = 'SWITCH_FLITER'

export function addTodo (todoValue) {
    return {
        type: ADD_TODO,
        todoValue
    }
}
export function toggleTodo(todoIndex) {
    return {
        type: TOGGLE_TODO,
        todoIndex
    }
}
export function deleteTodo(todoIndex) {
    return {
        type: DELETE_TODO,
        todoIndex
    }
}
export function clearCompleted() {
    return {
        type: CLEAR_COMPLETED
    }
}
export function toggleAll(isChecked){
    return {
        type: TOGGLE_ALL,
        isChecked
    }
}
export function switchFilter(filterIndex){
    return {
        type: SWITCH_FLITER,
        filterIndex
    }
}
