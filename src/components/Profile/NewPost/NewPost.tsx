import React, {ChangeEvent, useState} from "react";
import Box from "@mui/material/Box";
import {NewPostTextType} from "./NewPostContainer";


const NewPost: React.FC<NewPostTextType> = (props) => {

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const obj = {
        name: 'Dim',
        age: 33,
        address: {
            city: 'Stavropol',
            street: "8's March",
            number: 59,
            job: {
                streetJob: 'Lenina',
                numberJob: 127,
                numbers: [1, 2, 3, 4]
            }
        }
    }

    let {age, name, ...restProps} = obj
    console.log(age)
    console.log(name)

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

