// @flow
import * as React from 'react';

import {FilterValuesType} from "./AppRedux";
import {FC} from "react";
import {Button} from "@material-ui/core";


type Props = {
    filter: FilterValuesType
    setFilter: (filter: FilterValuesType) => () => void
};
export const ButtonsBlock: FC<Props> = React.memo( (
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
});
