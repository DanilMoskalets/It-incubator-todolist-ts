// @flow
import * as React from 'react';
import Button from "./Button";
import {FilterValuesType} from "./App";
import {FC} from "react";

type Props = {
    filter: FilterValuesType
    setFilter: (filter: FilterValuesType) => () => void
};
export const ButtonsBlock: FC<Props> =(
    {
         filter,
         setFilter
     }

)=> {
        return (
            <>
                <Button
                    active={filter === "all"}
                    title={"All"}
                    onClickHandler={setFilter('all')}
                />
                <Button
                    active={filter === "active"}
                    title={"Active"}
                    onClickHandler={setFilter('active')}
                />
                <Button
                    active={filter === "completed"}
                    title={"Completed"}
                    onClickHandler={setFilter("completed")}
                />

            </>
        );
    };