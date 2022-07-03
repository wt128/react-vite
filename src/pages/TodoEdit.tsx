import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import axios from "axios";

import { 
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    RadioGroup,
    Radio,
    Chip,
} from '@mui/material';
export const TodoEdit: React.FC<{isOpen: boolean}>  = (prop) => {
    const [open, setOpen] = React.useState(false);
    const chipColor: {
        value: string,
        label: string,
        color: 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
    }[] = [
        {
            value: "1",
            label: "優先度高",
            color: "primary",
        },
        {
            value: "2",
            label: "優先度中",
            color: "warning"
        },
        {
            value: "3",
            label: "優先度低",
            color: "secondary",
        },
        {
            value: "4",
            label: "未定",
            color: "default",
        },
        {
            value: "5",
            label: "緊急",
            color: "error"
        }
    ];

    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("aaaaa");
    }

    const controlProps = (index: string) => ({
        checked: !!index,
        onChange: handleRadio,
        value: index,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': index },
    });
    const save = () => {
        
        // await axios
    }
    return (
        <>
            <Dialog open={prop.isOpen}>
                <DialogTitle>編集</DialogTitle>
                <DialogContent>
                <TextField
                    id="title"
                    label="body"
                    type="search"
                    variant="standard"
                    defaultValue=""
                />
                <TextField
                    id="title"
                    label="body"
                    type="search"
                    variant="standard"
                    defaultValue=""
                />
                <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                {
                   chipColor.map((Item) => {
                       return (
                           <Radio
                                {...controlProps((Item.value))}
                            >
                                <Chip label={Item.label} color={Item.color} />
                            </Radio>
                                
                       )
                   })
                }
                </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={save}>save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}