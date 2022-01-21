// @flow
import * as React from 'react';

type Props = {
    name: string
    callBack: () => void
};
export const Button = (props: Props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return  <button onClick={onClickHandler}>{props.name}</button>
};