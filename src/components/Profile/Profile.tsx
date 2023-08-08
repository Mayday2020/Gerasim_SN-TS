import React, {useState} from "react";
import {Typography} from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/store";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {v1} from "uuid";



let profileState: PostDataType[] = [
    {id: v1(), message: 'That\'s MyPost', likes: 2},
    {id: v1(), message: 'Hello!!', likes: 3},
    {id: v1(), message: 'WTF?!', likes: 89},
    {id: v1(), message: 'Zzz...', likes: 5},
]


const Profile: React.FC<any> = () => {
    console.log('Profile rendered')
    let [newText, setNewText] = useState('')
    let [posts, setPosts] = useState(profileState)

    let updateNewPostText = (text: string) => {
        setNewText(text)
    }
    let addPost = () => {
        let newPost = { id: v1(), message: newText, likes: 0}
        setPosts([...posts, newPost])
        console.log(posts)
    }
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <ProfileInfo />
            <NewPostContainer newPostText={newText} updateNewPostText={updateNewPostText} addPost={addPost}/>
            <MyPostsContainer postsData={posts} />
        </div>
    )
}
export default Profile;

