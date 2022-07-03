
import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import {Todo} from './types';
import { TodoEdit } from './TodoEdit';
import { Edit } from "@mui/icons-material";


export const TodoDetail: React.FC<{todo: Todo}> = (prop) => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [todoText, setTodoText] = React.useState<string>("");
    const [open, setOpen] = React.useState<boolean>(false);
    const boxStyle: React.CSSProperties = {
        padding: '0.5em 1em',
        background: '#f4f4f4',
        borderLeft: 'solid 6px #5bb7ae',
        
        width: "50%",
        height: "100px",
        
        margin: "20px auto",
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.33)',
        animation: "fadeIn 5s ease 1s 1 normal backwards",
    };
    const InnerText: React.CSSProperties = {
        margin: 0,
        padding: 0,
        
        textAlign: "left",
    };

    const InnerUserName: React.CSSProperties = {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "left",
        fontFamily: ""
    }

    const openDialog = (edited: Todo) => {
        setOpen(true);
    }

   
    return (
        <>
            <div style={{...boxStyle}}>
                <p style={{...InnerUserName}}>
                    {prop.todo.user}       
                </p>
                <p style={{...InnerText}}>{prop.todo.body}</p>
                <EditIcon className="item2" onClick={() => openDialog(prop.todo)} />
            </div>
            <TodoEdit
                isOpen={open}
            />
        </>
    )
}