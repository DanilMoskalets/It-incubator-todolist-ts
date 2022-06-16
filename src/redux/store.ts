import {combineReducers,  legacy_createStore} from "redux";
import {todoListReducer} from "../reducer/todoList-reducer";
import {taskReducer} from "../reducer/task-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    todoLists: todoListReducer,
    tasks: taskReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools())

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store