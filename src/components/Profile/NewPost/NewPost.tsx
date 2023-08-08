import React, {ChangeEvent} from "react";
import Box from "@mui/material/Box";
import {NewPostTextType} from "./NewPostContainer";


const NewPost: React.FC<NewPostTextType> = (props) => {

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <Box p={2}>
                <textarea onChange={ onChangePostHandler } value={props.newPostText}>
                </textarea>
                <div>
                    <button onClick={ props.addPost }>Add post</button>
                </div>
            </Box>
        </div>
    )
}

export default NewPost;

