// @flow 
import * as React from 'react';
import {ChangeEvent, FC, KeyboardEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    changeTaskTitle: (newTitle: string) => void
};
export const EditableSpan: FC<EditableSpanPropsType> = (
    {
        title,
        changeTaskTitle
    }
) => {
    const [userText, setUserText] = useState(title)
    const [editMode, setEditMode] = useState(false)

    const onChangeSetUserText = (e: ChangeEvent<HTMLInputElement>) => {
        setUserText(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        changeTaskTitle(userText)
        setEditMode(false)
    }

    const onKeyPressEditTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && offEditMode()



    return (
        <>
            {
                editMode
                    ?
                    <input
                        autoFocus={true}
                        onBlur={offEditMode}
                        value={userText}
                        onChange={onChangeSetUserText}
                        onKeyPress={onKeyPressEditTask}
                    /> :
                    <span onDoubleClick={onEditMode}>{title}</span>
            }
        </>
    );
};