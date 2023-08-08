import React from 'react'
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FaceIcon from '@mui/icons-material/Face';
import s from './myPost.module.css'

type PostType = {
    message: string
    likes: number
}

const MyPost: React.FC<PostType> = (props) => {
    return (
        <Box className={s.post}>
            <ListItem>
                <ListItemIcon>
                    <FaceIcon />
                </ListItemIcon>
                <ListItemText primary={props.message} />
                <ListItemIcon>
                    <FavoriteBorderIcon />{props.likes}
                </ListItemIcon>
            </ListItem>
        </Box>
    )
}

export default MyPost;

