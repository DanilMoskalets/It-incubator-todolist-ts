import React, {useReducer, useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, IconButton, Paper, Toolbar, Typography, Button, Container, Grid} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC, removeTodoListAC,
    todoListReducer
} from "./reducer/todoList-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "./reducer/task-reducer";
// C
// R
// U
// D
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export type TaskStateType = {
    [todoListID: string]: Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed"

const AppReducer = () => {
    // BLL:
    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoLists, dispatchTodoList] = useReducer( todoListReducer,[
        {id: todoListID_1, title: "Что можно делать с Тудулистом", filter: "all"},
        {id: todoListID_2, title: "Что можно делать с Заметками", filter: "all"},
    ])
    const [tasks, dispatchTask] = useReducer(taskReducer, {
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
    })

// TodoList
    const addTodoList = (title: string) => {
       dispatchTodoList(addTodoListAC(title))
        dispatchTask(addTodoListAC(title))

    }

    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        dispatchTodoList(changeTodoListFilterAC(todoListID, filter))
    }

    const changeTodoListTitle = (title: string, todoListID: string) => {
       dispatchTodoList(changeTodoListTitleAC(todoListID, title))
    }

    const removeTodoList = (todoListID: string) => {
        dispatchTodoList(removeTodoListAC(todoListID))
        dispatchTask(removeTodoListAC(todoListID))
    }

// Task
    const removeTask = (taskID: string, todoListID: string) => {
      dispatchTask(removeTaskAC(taskID, todoListID))
    }
    const addTask = (title: string, todoListID: string) => {
       dispatchTask(addTaskAC(title, todoListID))
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
       dispatchTask(changeTaskStatusAC(taskID, isDone, todoListID))
    }

    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
       dispatchTask(changeTaskTitleAC(taskID, title, todoListID))
    }


    const getTasksForRender = (todoList: TodoListType) => {
        switch (todoList.filter) {
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            case "completed":
                return tasks[todoList.id].filter(t => t.isDone)
            default:
                return tasks[todoList.id]
        }
    }


    const todoListsComponents =

        todoLists.map(tl => {
        const tasksForRender = getTasksForRender(tl)
        return (

                <Grid item key={tl.id}>
                <Paper  elevation={8} className={'todoList'}  style={{padding: '10px'}}>

                    <TodoList

                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForRender}
                        filter={tl.filter}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        removeTodoList={removeTodoList}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskTitle={changeTaskTitle}
                        changeTodoListTitle={changeTodoListTitle}
                    />


                </Paper>
                </Grid>

        )
    })

    // GUI:
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit" variant={"outlined"}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px', }} >
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={10}>
                    {todoListsComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default AppReducer;
