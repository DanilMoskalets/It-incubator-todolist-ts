import React, {ChangeEvent, useEffect, useState} from 'react'
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
    const [value, setValue] = useState('')
    const handleGetTasks = () => {
        tasksAPI.getTasks(value)
            .then((res) => {
                return res.data.items
            })
            .then(data => {
                setState(data)
            })


        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }


    return (
        <div>
            {JSON.stringify(state)}
            <hr/>
            <input
                type='text'
                value={value}
                onChange={handleChangeInput}
            />
            <button onClick={handleGetTasks}>OK</button>
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

export const UpdateTasks = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            tasksAPI.updateTasks('f054351b-f381-4b44-96e5-8c0f1d874375', '53930f76-fc53-45a2-b3f8-77bfed3fdb8a', 'Task3')


        }, [])

        return (
            <div>
                {JSON.stringify(state)}

            </div>
        )

    }

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksAPI.deleteTasks('f054351b-f381-4b44-96e5-8c0f1d874375', '87e7a02f-130b-4d6c-af3f-b3d0aa77f6a8')


    }, [])

    return (
        <div>
            {JSON.stringify(state)}

        </div>
    )

}
