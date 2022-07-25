import axios from "axios";

export type TodolistType = {
    id: string
    addedDate: string
    title: string
    order: number
}

export type TasksType = {
    "items": [
        {
            "id": string
            "title": string
            "description": null | string
            "todoListId": string
            "order": number
            "status": number
            "priority": number
            "startDate": null | string
            "deadline": null | string
            "addedDate": string
        }
    ],
    "totalCount": number
    "error": null | string
}

type ResponseType<T> = {
    resultCode: number
    messages: string[]
    data: T
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '68c28a1d-c604-4da0-9181-991d0fefe37f'
    }
})


export const todoListAPI = {

    getTodolists()  {
        const promise = instance.get<TodolistType[]>(
            'todo-lists',
        )
        return promise
    },

    createTodoList(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>(
            `todo-lists/`,
            {title})
        return promise
    },

    deleteTodoList(todoListID: string) {
        const promise = instance.delete<ResponseType<{}>>(
            `todo-lists/${todoListID}`,
        )
        return promise
    },

    updateTodoList(title: string, todoListID: string) {
        const promise = instance.put<ResponseType<{}>>(
            `todo-lists/${todoListID}`,
            {title},
        )
        return promise
    }
}

export const tasksAPI = {

    getTasks(todoListID: string) {
        const promise = instance.get(
            `todo-lists/${todoListID}/tasks`,
        )
        return promise
    },

    createTasks(todoListID: string, title: string) {
        const promise = instance.post(
            `todo-lists/${todoListID}/tasks`,
            {title})
        return promise
    },



}



