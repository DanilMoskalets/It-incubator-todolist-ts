import React from 'react';
import {EditableSpan} from "./EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoListHeaderPropsType = {
    title: string
    removeTodoList: ()=> void
    changeTodoListTitle: (newTitle: string) => void
}

const TodoListHeader: React.FC<TodoListHeaderPropsType> = (
    {
        title,
        changeTodoListTitle,
        ...props
    }

) => {
    return  (
        <h3>
            <EditableSpan title={title} changeTaskTitle={changeTodoListTitle}/>
            <IconButton onClick={props.removeTodoList}>
                <Delete/>
            </IconButton>
        </h3>
    );
};

export default TodoListHeader;