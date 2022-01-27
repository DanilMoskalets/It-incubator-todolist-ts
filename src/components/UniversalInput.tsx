import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction} from 'react';
import s from "../Todolist.module.css";

type universalInputPropsType = {
    error: boolean
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    setError: Dispatch<SetStateAction<boolean>>
    callBack: () => void

}

export const UniversalInput = (props: universalInputPropsType) => {

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
        props.setError(false)

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        props.callBack()
    }

    return (
        <>
            <input
                className={ props.error ? s.error: ''}
                value={props.title}
                onChange={onchangeHandler}
                onKeyPress={onKeyPressHandler}
            />
        </>
    );
};

