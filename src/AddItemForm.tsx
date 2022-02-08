// @flow 
import * as React from 'react';
import {ChangeEvent, useState, KeyboardEvent} from "react";

type Props = {
    addItem: (title: string) => void
};
export const AddItemForm = (props: Props) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean | string>(false)

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
      setError(false)
        if(e.charCode === 13){
            addItem()
        }
    }

    const addItem = () => {
        if(title.trim() !== ''){
            props.addItem(title)
            setTitle('')
        }else{
            setError('title is required')
        }
    }



    return (
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle} //input.value
                onKeyPress={onKeyPressAddTask}
                className={error ? "error" : ""}
            />
            <button onClick={addItem}>+</button>
            {error &&  <div>{error}</div> }
        </div>
    );
};