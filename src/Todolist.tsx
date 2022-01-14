import React, {useState} from 'react';
import {filterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskID: number) => void
    // filteredTasks:(filterValue:filterType)=>void
}

export function Todolist(props: PropsType) {
    const [filter, setFilter] = useState('All')
    const {tasks, removeTasks, title} = props

    let filteredT = tasks
    if (filter === 'Active') {
        filteredT = tasks.filter(f => f.isDone)
    }
    if (filter === "Completed") {
        filteredT = tasks.filter(f => !f.isDone)
    }

    const filteredTasks = (filterValue: filterType) => {
        setFilter(filterValue)
    }

    return <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredT.map((m, i) => {
                return (
                    <li key={i}>
                        <button onClick={() => removeTasks(m.id)}>X</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>

                    </li>
                )
            })}

        </ul>
        <div>
            <button onClick={() => filteredTasks('All')}>All</button>
            <button onClick={() => filteredTasks('Active')}>Active</button>
            <button onClick={() => filteredTasks('Completed')}>Completed</button>
        </div>
    </div>
}
