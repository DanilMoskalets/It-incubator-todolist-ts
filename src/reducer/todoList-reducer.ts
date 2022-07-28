import {FilterValuesType, TodoListType} from "../AppRedux";
import {v1} from "uuid";


// export type setTodoListsAT = {
//     type: 'SET-TODOLISTS'
//     todoLists: Array<TodoListType>
// }

export type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListId: string
}

export  type addTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
    id: string
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


export type ActionType  = removeTodoListAT
    | addTodoListAT
    | changeTodoListFilterAT
    | changeTodoListTitleAT
    | setTodoListsAT

export const todoListID_1 = v1()
export const todoListID_2 = v1()

const todoListsState: TodoListType[] = [
    {id: todoListID_1, title: "Что можно делать с Тудулистом", filter: "all"},
    {id: todoListID_2, title: "Что можно делать с Заметками", filter: "all"},
]

export const todoListReducer = (todoLists: TodoListType[] = todoListsState, action: ActionType): TodoListType[] => {
    switch (action.type) {
        case "SET-TODOLISTS":
            return action.todoLists.map(tl => ({
                ...tl,
                filter: 'all'
            }))
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.todoListId)
        case 'ADD-TODOLIST':
            const newTodoList: TodoListType = {
                id: action.id, title: action.title , filter: 'all'
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
export const removeTodoListAC = (todoListId:string): removeTodoListAT => {
    return ({type: 'REMOVE-TODOLIST', todoListId})
}

export const addTodoListAC = (title:string, idTodoList: string): addTodoListAT => {
    return ({ type: 'ADD-TODOLIST', title, id: idTodoList})
}

export const changeTodoListTitleAC = (id: string, title: string): changeTodoListTitleAT => {
    return ({ type: 'CHANGE-TODOLIST-TITLE', id, title})
}

export const changeTodoListFilterAC = (id: string, filter: FilterValuesType): changeTodoListFilterAT => {
    return ({ type: 'CHANGE-TODOLIST-FILTER', id, filter})
}

export const setTodoListsAC = (todoLists: Array<TodoListType>)  => {
    return {type: 'SET-TODOLISTS', todoLists} as const
}


  export type setTodoListsAT = ReturnType<typeof setTodoListsAC>

