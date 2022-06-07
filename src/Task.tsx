import React, {ChangeEvent} from 'react';
import {TaskType} from "./App";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from '@material-ui/core';
import {DeleteOutline} from "@material-ui/icons";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (id: string, title: string) => void
}

const Task: React.FC<TaskPropsType> = (
    {
        id,
        isDone,
        title,
        removeTask,
        changeTaskStatus,
        changeTaskTitle,
        ...props
    }
) => {
    const onClickRemoveTask = () => removeTask(id)
    const onChangeChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
        changeTaskStatus(id, e.currentTarget.checked)

    const onChangeTaskTitle = (newTitle: string) =>
        changeTaskTitle(id, newTitle)


    return (
        <li className={isDone ? "is-done" : ""}>
            <Checkbox
                color={'primary'}
                onChange={onChangeChangeTaskStatus}
                checked={isDone}/>
            <EditableSpan title={title} changeTaskTitle={onChangeTaskTitle}/>
            <IconButton onClick={onClickRemoveTask}>
                <DeleteOutline/>
            </IconButton>
        </li>
    );
};

export default Task;


{/*<input*/}
{/*    type="checkbox"*/}
{/*    onChange={onChangeChangeTaskStatus}*/}
{/*    checked={isDone}/>*/}

// 1. Функция принимает параметром массив чисел и возвращает max значение.
// getMax1([1,4,6,8]) => 8
// 2. Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
// getMax2([1,4,6,8]) => [8, 6]
// 3. Функция принимает параметром массив чисел и количество max,
// которые надо найти и возвращает массив  max значениями
// getMax3([1,4,6,8],1) => [8, 6, 4]
// math.max и sort не используем!