import profileReducer, {addPostActionCreator} from "../profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message:"Hi, how are you?", likeCount:"14"},
        {id: 2, message:"My name is John", likeCount:"16"},
        {id: 3, message:"Hi John", likeCount:"190"}
    ]
}

it('length of posts should be incremented', () => {
    let action =  addPostActionCreator("yoyoyoyoyo");


    let newState = profileReducer({state},{action});

    expect(newState.posts.length).toBe(4);
});

it('after deleting length of messages should be decrement', () => {
    let action =  addPostActionCreator("yoyoyoyoyo");


    let newState = profileReducer({state},{action});

    expect(newState.posts.length).toBe(4);
});
