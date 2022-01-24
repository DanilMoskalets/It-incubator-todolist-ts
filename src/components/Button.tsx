// @flow
import * as React from 'react';
import {FilterValuesType} from "../App";
import s from '../Todolist.module.css'

type Props = {
    name: string
    callBack: () => void
    className?: string | object
    styleForButton?: FilterValuesType
};
export const Button = (props: Props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return  <button className={props.styleForButton === props.name ? s.activeFilter : '' } onClick={onClickHandler}>{props.name}</button>
};