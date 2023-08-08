import {ActionTypes, ProfileStateType} from "./store";
import {v1} from "uuid";

type ProfileReducerType = (state: ProfileStateType, action: ActionTypes) => ProfileStateType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfileStateType = {
    postsData: [
        {id: v1(), message: 'That\'s MyPost', likes: 2},
        {id: v1(), message: 'Hello!!', likes: 3},
        {id: v1(), message: 'WTF?!', likes: 89},
        {id: v1(), message: 'Zzz...', likes: 5},
    ],
    newPostText: 'any text'
}


const profileReducer: ProfileReducerType = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            debugger
            let body = action.postText
            let newPost = {id: v1(), message: body, likes: 0}
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        } case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        } default: {
            return state
        }
    }
}

export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const updateNewPostTextAC = (newText: string)=> {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export default profileReducer;