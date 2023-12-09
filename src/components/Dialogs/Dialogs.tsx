import React from 'react'
import {Grid, Typography} from "@mui/material";
import MessageItem from "./MessageItem/MessageItem";
import DialogsItem from "./DialogItem/DialogItem";

export type DialogsType = {}

const Dialogs: React.FC<DialogsType> = (props) => {
    const state = {
        dialogsData: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Maria'},
            {id: 3, name: 'Max'}
        ],
        messagesData: [
            {id: 1, message: 'This"s Vlad'},
            {id: 2, message: 'This"s Maria'},
            {id: 3, message: 'This"s Max'}
        ]
    }

    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {state.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)}
                </Grid>
                <div style={{borderLeft: '1px solid darkgray', marginRight: '5px'}}> </div>
                <Grid item xs={5}>
                    {state.messagesData.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/>)}
                </Grid>
                <Grid item xs={10}>
                    textarea and button
                </Grid>
            </Grid>
        </div>
    )
}

/*const Dialogs: React.FC<DialogsType> = (props) => {

    const [state, setState] = useState('')
    const changeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.currentTarget.value)
    }
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {props.state.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)}
                </Grid>
                <Grid item xs={5}>
                    {props.state.messagesData.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/>)}
                </Grid>
                <Grid item xs={10}>
                    <textarea onChange={(e) => changeMessage(e)} value={state}> </textarea>
                    <div>
                        <button onClick={props.addMessage}>Add message</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}*/

export default Dialogs