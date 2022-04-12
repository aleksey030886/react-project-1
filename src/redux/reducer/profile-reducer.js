import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = "samurai/profile/ADD_POST";
const SET_USER_PROFILE = "samurai/profile/SET_USER_PROFILE";
const SET_STATUS = "samurai/profile/SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message:"Hi, how are you?", likeCount:"14"},
        {id: 2, message:"My name is John", likeCount:"16"},
        {id: 3, message:"Hi John", likeCount:"190"}
    ],
    profile: null,
    status: " "
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 8
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST , newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.getProfile(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;