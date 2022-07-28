import {TaskStateType, TaskType} from "../AppRedux";
import {v1} from "uuid";
import {addTodoListAT, removeTodoListAT, setTodoListsAT, todoListID_1, todoListID_2} from "./todoList-reducer";

export type FirstTaskActionTypeAT = {
    type: 'REMOVE-TASK'
    todoListID: string
    TaskId: string
}

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type SomeTaskActionTypeAT = {
    type: 'ADD-TASK'
    title: string
    todoListID: string
}
export type AddTaskActionType = ReturnType<typeof addTaskAC>

export type changeTaskStatusAT = {
    type: 'CHANGE-TASK-STATUS',
    todoListID: string,
    TaskId: string,
    isDone: boolean
}
export type changeTaskStatus = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleAT = {
    type: 'CHANGE-TASK-TITLE'
    todoListID: string
    TaskId: string
    title: string
}
export type ChangeTaskTitle = ReturnType<typeof changeTaskTitleAC>


export type ActionType =
    FirstTaskActionTypeAT
    | SomeTaskActionTypeAT
    | changeTaskStatusAT
    | ChangeTaskTitleAT
    | addTodoListAT
    | removeTodoListAT
    | setTodoListsAT


const tasksState = {
    [todoListID_1]: [
        {id: v1(), title: "Тудулист Можно Добавлять ", isDone: false},
        {id: v1(), title: "Можно удалять", isDone: false},
        {id: v1(), title: "Можно фильтровать", isDone: true},
    ],
    [todoListID_2]: [
        {id: v1(), title: "Заметки можно добавлять", isDone: false},
        {id: v1(), title: "Каждую заметку можно Удалять", isDone: false},
        {id: v1(), title: "Их можно редактировать с помощью дабклика", isDone: true},
        {id: v1(), title: "Их можно отмечать как выполеные и наоборот ", isDone: false},
    ],
}

export const taskReducer = (tasks: TaskStateType = tasksState, action: ActionType): TaskStateType => {
    switch (action.type) {
        case 'SET-TODOLISTS':
           const stateCopy = {...tasks}
            action.todoLists.forEach(tl => tasksCopy[tl.id] = [] )
            return stateCopy

        case 'REMOVE-TASK':
            return ({
                ...tasks,
                [action.todoListID]: tasks[action.todoListID].filter(t => t.id !== action.TaskId)
            })
        case 'ADD-TASK':
            const newTask: TaskType = {id: v1(), title: action.title, isDone: false}
            return {...tasks, [action.todoListID]: [newTask, ...tasks[action.todoListID]]}
        case "CHANGE-TASK-STATUS":
            return {
                ...tasks,
                [action.todoListID]: tasks[action.todoListID].map(t => t.id === action.TaskId ? {
                    ...t,
                    isDone: action.isDone
                } : t)
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...tasks,
                [action.todoListID]: tasks[action.todoListID].map(t => t.id === action.TaskId ? {
                    ...t,
                    title: action.title
                } : t)
            }
        case "ADD-TODOLIST":
            return {...tasks, [action.id]: []}
        case "REMOVE-TODOLIST":
            const tasksCopy = {...tasks}
            delete tasksCopy[action.todoListId]
            return tasksCopy
        default:
            return tasks
    }
};
export const removeTaskAC = (TaskId: string, todoListID: string): FirstTaskActionTypeAT => {
    return ({type: 'REMOVE-TASK', TaskId, todoListID} as const)
}

export const addTaskAC = (title: string, todoListID: string): SomeTaskActionTypeAT => {
    return ({type: 'ADD-TASK', title, todoListID} as const)
}
export const changeTaskStatusAC = (TaskId: string, isDone: boolean, todoListID: string): changeTaskStatusAT => {
    return ({type: 'CHANGE-TASK-STATUS', TaskId, isDone, todoListID} as const)
}

export const changeTaskTitleAC = (TaskId: string, title: string, todoListID: string): ChangeTaskTitleAT => {
    return ({type: 'CHANGE-TASK-TITLE', TaskId, title, todoListID} as const)
}



