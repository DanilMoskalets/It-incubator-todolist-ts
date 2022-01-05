// @flow
import * as React from 'react';
import {Item} from "./Item";

type TodoListProp = {
    ogurcy?: string;
    pomidorchiki?: string
    arrForTodolist1: Array<InArr>
}

type InArr = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListProp) => {
    return (
        <div className="App">
            <div>
                <h3>{props.ogurcy}</h3>
                <h3>{props.pomidorchiki}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>

                {props.arrForTodolist1.map((m) => {
                        return (
                            <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                        )

                })}
                {/*<ul>*/}
                {/*    <li><input type="checkbox" checked={props.arrForTodolist1[0].isDone}/> <span>{props.arrForTodolist1[0].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.arrForTodolist1[1].isDone}/> <span>{props.arrForTodolist1[1].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.arrForTodolist1[2].isDone}/> <span>{props.arrForTodolist1[2].title}</span></li>*/}
                {/*</ul>*/}
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};