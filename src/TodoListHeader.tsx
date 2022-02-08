import React from 'react';
import {EditableSpan} from "./EditableSpan";

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

            <button onClick={props.removeTodoList}>x</button>
        </h3>
    );
};

export default TodoListHeader;