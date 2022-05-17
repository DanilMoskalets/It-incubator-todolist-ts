import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

export type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export  type addTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}
export  type changeTodoListTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}

export type changeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}


export type ActionType  = removeTodoListAT | addTodoListAT | changeTodoListFilterAT | changeTodoListTitleAT

export const todoListReducer = (todoLists: TodoListType[], action: ActionType): TodoListType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodoListId = v1()
            const newTodoList: TodoListType = {
                id: newTodoListId, title: action.title , filter: 'all'
            }
            return [...todoLists, newTodoList]
        case "CHANGE-TODOLIST-TITLE":
            return  todoLists.map(tl => tl.id === action.id
                ? {...tl, title: action.title}
                : tl)
        case "CHANGE-TODOLIST-FILTER":
            return  todoLists.map(tl => tl.id === action.id
                ? {...tl, filter: action.filter}
                : tl)
        default:
            return todoLists
    }
};
export const removeTodoListAC = (id:string): removeTodoListAT => {
    return ({type: 'REMOVE-TODOLIST', id})
}

export const addTodoListAC = (title:string): addTodoListAT => {
    return ({ type: 'ADD-TODOLIST', title})
}

export const changeTodoListTitleAC = (id: string, title: string): changeTodoListTitleAT => {
    return ({ type: 'CHANGE-TODOLIST-TITLE', id, title})
}

export const changeTodoListFilterAC = (id: string, filter: FilterValuesType): changeTodoListFilterAT => {
    return ({ type: 'CHANGE-TODOLIST-FILTER', id, filter})
}

