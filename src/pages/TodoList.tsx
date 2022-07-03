import { Stack, Box } from "@mui/material"
import { TodoDetail } from "./TodoDetail"
import * as React from "react";
import {Todo} from "./types";
import axios from "axios";



//const todos = React.createContext()
export const Card: React.FC = () => {
    //const [todos, setTodos] = React.useState<Todo[]>([]);
    const fetchTodo = async () => {

        // await axios.get<Todo>();
     }
     
     const fetchCount = async () => {
        // await axios.get<Todo>();
     }
     const todos: Todo[] = [
         {
             id: 1,
             user: "aaaaa",
             body: "body",
             icon: "&#127995;",
             tag: 1,

         }
     ];
  
    return (
        <>
            {todos.map((t) =>{ 
                return <TodoDetail todo={t} key={t.id} />
            })
            }
        </>
    )
}