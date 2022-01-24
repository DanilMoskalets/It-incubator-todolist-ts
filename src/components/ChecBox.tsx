// @flow
import * as React from 'react';
import {ChangeEvent} from "react";

type CheckBoxPropsType = {
    isDone: boolean
    checkBoxChangeStatus: (value: boolean) => void
};
export const CheckBox = (props: CheckBoxPropsType) => {

    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        props.checkBoxChangeStatus(e.currentTarget.checked)
    }

    return (
        <input type="checkbox" checked={props.isDone} onChange={changeHandle}/>
    )
};