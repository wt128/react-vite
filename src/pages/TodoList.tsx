import { Stack, Box } from "@mui/material"
import { TodoDetail } from "./TodoDetail"
import * as React from "react";
import {Todo} from "./types";
import axios from "axios";



//const todos = React.createContext()
export const Card: React.FC = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const fetchTodo = async () => {

        // await axios.get<Todo>();
     }
     
     const fetchCount = async () => {
        // await axios.get<Todo>();
     }
    const listsTodo = todos.forEach((t) =>{ 
        return <TodoDetail todo={t} />
    })
    return (
        <>
        <style>
                {`@keyframes fadeIn {
                from {
                    opacity: 0,
                    transform: translateY(20px);
                }
                to {
                    opacity: 1,
                    transform: translateY(0);
                }
            }`}
        </style>
            {{listsTodo}}
        </>
    )
}