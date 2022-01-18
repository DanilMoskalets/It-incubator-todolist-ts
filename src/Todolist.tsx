import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onClickAddTask = () => {
        if (title.trim().length === 0) return

        props.addTask(title.trim())
        setTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        onClickAddTask()
    }

    const onClickHandleFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const handleRemove = (tID: string) => {
        props.removeTask(tID)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onchangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickAddTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {


                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                handleRemove(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => {
                onClickHandleFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                onClickHandleFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                onClickHandleFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}
