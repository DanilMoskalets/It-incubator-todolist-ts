import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import s from './Todolist.module.css'
import {CheckBox} from "./components/CheckBox";
import {UniversalInput} from "./components/UniversalInput";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    checkBoxChangeStatus: (id: string, value: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)


    const checkBoxHandle = (tID: string, value: boolean) => {
        props.checkBoxChangeStatus(tID, value)
    }

    const onClickAddTask = () => {
        if (title.trim() === '') {
            setError(true)
        } else {
            props.addTask(title.trim())
            setTitle('')
        }


    }


    const onClickHandleFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
        console.log(value)
    }

    const onClickRemoveHandler = (tID: string) => {
        props.removeTask(tID)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <UniversalInput
                error={error}
                title={title}
                setTitle={setTitle}
                setError={setError}
                onClickAddTask={onClickAddTask}
            />
            {/*<input*/}
            {/*    className={ error ? s.error: ''}*/}
            {/*    value={title}*/}
            {/*    onChange={onchangeHandler}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*/>*/}
            <Button name={'+'} callBack={onClickAddTask}/>

        </div>

        {error && <div className={s.errorMessage}>Ошибка</div>}

        <ul>
            {
                props.tasks.map(t => {


                    return (
                        <li key={t.id} className={t.isDone ? s.isDoneStyle : ''}>
                            <CheckBox isDone={t.isDone} checkBoxChangeStatus={(value) => checkBoxHandle(t.id, value)}/>
                            {/*<input type="checkbox" checked={t.isDone}*/}
                            {/*       onChange={(event) => checkBoxHandle(t.id, event.currentTarget.checked)}/>*/}

                            <span>{t.title}</span>
                            <Button name={'X'} callBack={() => onClickRemoveHandler(t.id)}/>
                        </li>
                    )
                })
            }
        </ul>
        <div>

            <Button styleForButton={props.filter} name={'all'} callBack={() => onClickHandleFilter('all')}/>
            <Button styleForButton={props.filter} name={'active'} callBack={() => onClickHandleFilter('active')}/>
            <Button styleForButton={props.filter} name={'completed'} callBack={() => onClickHandleFilter('completed')}/>

            {/*// <button onClick={() => {*/}
            {/*//     onClickHandleFilter("all")*/}
            {/*// }}>*/}
            {/*//     All*/}
            {/*// </button>*/}
            {/*// <button onClick={() => {*/}
            {/*//     onClickHandleFilter("active")*/}
            {/*// }}>*/}
            {/*//     Active*/}
            {/*// </button>*/}
            {/*// <button onClick={() => {*/}
            {/*//     onClickHandleFilter("completed")*/}
            {/*// }}>*/}
            {/*//     Completed*/}
            {/*// </button>*/}
        </div>
    </div>
}
