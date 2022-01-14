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


    const removeTasks = (taskID:number) => {
        console.log(taskID)
        setTask(tasks.filter(f=>f.id!==taskID))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                 tasks={tasks}
                removeTasks={removeTasks}
                // filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
