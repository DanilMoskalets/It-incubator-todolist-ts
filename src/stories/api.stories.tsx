import React, {useEffect, useState} from 'react'
import {tasksAPI, todoListAPI} from "../api/todo-list-api";


export default {
    title: 'API/ API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.getTodolists()
            .then((res) => {
                return res.data
            })
            .then(data => {
                setState(data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListAPI.createTodoList('4')


    }, [])

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )

}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todoListID = '6f924021-c2f0-4dcc-9566-7b2115f602ef'
    useEffect(() => {
        todoListAPI.deleteTodoList(todoListID)
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todoListID = '2aa1fffd-0f39-49d6-9a65-693211d5bc18'
    useEffect(() => {
        todoListAPI.updateTodoList('3', todoListID)
    })


    return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListID = 'f054351b-f381-4b44-96e5-8c0f1d874375'
        tasksAPI.getTasks(todoListID)
            .then((res) => {
                return res.data.items
            })
            .then(data => {
                setState(data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksAPI.createTasks('f054351b-f381-4b44-96e5-8c0f1d874375', 'Task1')


    }, [])

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )

}
