// @flow 
import * as React from 'react';
import {ChangeEvent, useState, KeyboardEvent} from "react";
import {TextField} from "@material-ui/core";

type Props = {
    addItem: (title: string) => void
};
export const AddItemForm = React.memo((props: Props) => {
    console.log('AddItemForm call')

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean | string>(false)

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
      if(error !== false) setError(false)
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
            <TextField
                value={title}
                label={'Type value'}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddTask}
                variant = 'outlined'
                error={!!error}
                helperText={error}
            />
            <button onClick={addItem}>+</button>
        </div>
    );
});