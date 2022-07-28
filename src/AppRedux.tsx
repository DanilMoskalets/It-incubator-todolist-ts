import React, {useCallback, useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, IconButton, Paper, Toolbar, Typography, Button, Container, Grid} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC, removeTodoListAC, setTodoListsAC

} from "./reducer/todoList-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./reducer/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {todoListAPI} from "./api/todo-list-api";
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

const AppReducer = React.memo( () => {
    console.log('App call')
    const dispatch = useDispatch()
     const todoLists = useSelector<AppRootState, TodoListType[]>(state => state.todoLists)
     const tasks = useSelector<AppRootState, TaskStateType>(state => state.tasks)


    useEffect(() => {
        todoListAPI.getTodolists()
            .then(res => dispatch(setTodoListsAC(res.data)))

    }, [])
// TodoList
    const addTodoList = useCallback( (title: string) => {
        const idTodoList = v1();
        dispatch(addTodoListAC(title,idTodoList))
    }, []);

    const changeTodoListTitle = useCallback((title: string, todoListID: string) => {
       dispatch(changeTodoListTitleAC(todoListID, title))
    }, []);

    const removeTodoList = useCallback( (todoListID: string) => {
        dispatch(removeTodoListAC(todoListID))

    }, [])
// Task
    const removeTask = useCallback( (taskID: string, todoListID: string) => {
      dispatch(removeTaskAC(taskID, todoListID))
    }, [])

    const changeTaskStatus = useCallback((taskID: string, isDone: boolean, todoListID: string) => {
       dispatch(changeTaskStatusAC(taskID, isDone, todoListID))
    }, [] )

    const changeTaskTitle = useCallback( (taskID: string, title: string, todoListID: string) => {
       dispatch(changeTaskTitleAC(taskID, title, todoListID))
    }, [])





    const todoListsComponents =
        todoLists.map(tl => {
        return (

                <Grid item key={tl.id}>
                <Paper  elevation={8} className={'todoList'}  style={{padding: '10px'}}>

                    <TodoList
                        id={tl.id}
                        title={tl.title}
                        filter={tl.filter}
                        removeTask={removeTask}
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
})

export default AppReducer;
