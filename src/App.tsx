import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterType = 'All' | 'Active' | "Completed" | 'XZ'

function App() {

    const [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])



    // const [filter, setFilter] = useState('All')
    //
    // let filteredT = tasks
    // if (filter === 'Active') {
    //     filteredT = tasks.filter(f => f.isDone)
    // }
    // if (filter === "Completed") {
    //     filteredT = tasks.filter(f => !f.isDone)
    // }
    //
    // const filteredTasks = (filterValue: filterType) => {
    //     console.log(filterValue)
    //     setFilter(filterValue)
    // }



    const removeTasks = (taskID:number) => {
        console.log(taskID)
        setTask(tasks.filter(f=>f.id!==taskID))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filteredT}
                removeTasks={removeTasks}
                filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
