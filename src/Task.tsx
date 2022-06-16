import React, {ChangeEvent} from 'react';
import {TaskType} from "./AppRedux";
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



