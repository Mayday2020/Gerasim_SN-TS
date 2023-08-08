import React from 'react';
import {PostDataType, ProfileStateType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

export type MyPostType = {
    postsData: PostDataType[]
}

const MyPostsContainer = (props: MyPostType) => {
    return (
        <MyPosts postsData={props.postsData}/>
    )
}


export default MyPostsContainer;

