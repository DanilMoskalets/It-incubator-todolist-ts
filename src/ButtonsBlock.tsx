// @flow
import * as React from 'react';

import {FilterValuesType} from "./App";
import {FC} from "react";
import {Button} from "@material-ui/core";


type Props = {
    filter: FilterValuesType
    setFilter: (filter: FilterValuesType) => () => void
};
export const ButtonsBlock: FC<Props> = (
    {
        filter,
        setFilter
    }
) => {
    return (
        <>
            <Button
                 color="primary"
                variant={ filter === 'all' ? "contained" : 'outlined'}
                onClick={setFilter('all')}
            >All</Button>
            <Button
                color={'primary'}
                variant={ filter === 'active' ? "contained" : 'outlined'}
                onClick={setFilter('active')}
            >Active</Button>
            <Button
              variant= { filter === 'completed' ? "contained" : 'outlined'}
                color={'secondary'}
                onClick={setFilter('completed')}
            >Completed</Button>


        </>
    );
};




{/*<Button*/}
{/*    active={filter === "all"}*/}
{/*    title={"All"}*/}
{/*    onClickHandler={setFilter('all')}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "active"}*/}
{/*    title={"Active"}*/}
{/*    onClickHandler={setFilter('active')}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "completed"}*/}
{/*    title={"Completed"}*/}
{/*    onClickHandler={setFilter("completed")}*/}
{/*/>*/}