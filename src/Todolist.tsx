import React, {useCallback} from 'react';
import TodoListHeader from "./TodoListHeader";

import {FilterValuesType, TaskStateType, TaskType, TodoListType} from "./AppRedux";
import Task from "./Task";
import {AddItemForm} from "./AddItemForm";
import {ButtonsBlock} from "./ButtonsBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {addTaskAC} from "./reducer/task-reducer";
import {changeTodoListFilterAC, changeTodoListTitleAC} from "./reducer/todoList-reducer";

type TodoListPropsType = {
    id: string
    title: string
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

const TodoList = React.memo( (props: TodoListPropsType) => {
    const dispatch = useDispatch()
    const tasks = useSelector<AppRootState, TaskType[]>(state => state.tasks[props.id])

   const allTasks = tasks
    let tasksFiltered = allTasks
    if(props.filter === "active"){
        tasksFiltered = allTasks.filter(t => !t.isDone)
    }
    if(props.filter === "completed"){
        tasksFiltered = allTasks.filter(t => t.isDone)
    }

    const tasksComponents = tasksFiltered.map(t => {
        const removeTask = (taskID: string) => props.removeTask(taskID, props.id)
        const changeTaskStatus = (taskID: string, isDone: boolean) =>
            props.changeTaskStatus(taskID, isDone, props.id);

        const changeTaskTitle = (taskID: string, title: string) =>
            props.changeTaskTitle(taskID, title, props.id)

        return (
            <Task
                key={t.id}
                //{...t}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        )
    })
    // const tasksComponents = props.tasks.map(t => <Task key={t.id} {...t} />)



    const setFilterValue = useCallback( (filter: FilterValuesType) => {
        dispatch(changeTodoListFilterAC(props.id, filter))
    }, [])


    const removeTodoList = () => props.removeTodoList(props.id)

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id))
    }

    const onChangeTodoListTitle = (newTitle: string) => {
        dispatch(changeTodoListTitleAC(newTitle, props.id))
    }





    return (
        <div>
            <TodoListHeader
                title={props.title}
                removeTodoList={removeTodoList}
                changeTodoListTitle={onChangeTodoListTitle}

            />
            <AddItemForm addItem={addTask}/>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <ButtonsBlock filter={props.filter} setFilter={setFilterValue} />
            </div>
        </div>
    );
});

export default TodoList;