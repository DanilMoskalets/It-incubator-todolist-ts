import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";
import s from 'src/Todolist.module.css'

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);
    const [filter, setFilter] = useState<FilterValuesType>("all");

    const checkBoxChangeStatus = (id: string, value: boolean) => {
        setTasks(tasks.map(m => m.id === id ? {...m, isDone: value} : m))
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        console.log(...tasks)
        setTasks([newTask, ...tasks])
    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }


    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                checkBoxChangeStatus={checkBoxChangeStatus}
                filter={filter}
            />


        </div>
    );
}

export default App;
