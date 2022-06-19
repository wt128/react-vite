import styled from "styled-components";
import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';


export const TodoDetail = () => {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [todoText, setTodoText] = React.useState<string>("");

    const boxStyle: React.CSSProperties = {
        padding: '0.5em 1em',
        background: '#f4f4f4',
        borderLeft: 'solid 6px #5bb7ae',
        display: "flex",
        width: "50%",
        margin: "20px auto",
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.33)',
        animation: "fadeIn 5s ease 1s 1 normal backwards",
    };
    const InnerText: React.CSSProperties = {
        margin: 0,
        padding: 0,
        textAlign: "center"
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTodoText(e.target.value);
    };

    const saveEdit: React.VoidFunctionComponent = () => {
        
    }

    const EditText: React.FunctionComponent = (todoText) => {
        if (isEdit) {
            return <TextField
                label="編集"
                defaultValue=""
                onChange={handleChange}
            >
            </TextField>
        }
        return <></>
    }

    return (
        <>
            <style>
                .
            </style>
            <div style={{...boxStyle}}>
                <p style={{...InnerText}}>{ todoText }</p>
                <EditIcon className="EditIcon" onClick={() => setIsEdit(!isEdit)} />
                <EditText />
            </div>
        </>
    )
}