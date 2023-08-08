import React from "react";
import NewPost from "./NewPost";

export type NewPostTextType = {
    newPostText: string
    updateNewPostText: (text:string) => void
    addPost: () => void
}

const NewPostContainer = (props: NewPostTextType) => {
    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }
    return (
        <NewPost newPostText={props.newPostText} addPost={addPost} updateNewPostText={props.updateNewPostText}/>
    )
}

export default NewPostContainer;