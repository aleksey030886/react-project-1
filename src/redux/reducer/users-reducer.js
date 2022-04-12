import {usersAPI} from "../../api/api";
import {updateObjectArray} from "../../utils/object-helpers";

const FOLLOW = "samurai/users/FOLLOW";
const UNFOLLOW = "samurai/users/UNFOLLOW";
const SET_USERS = "samurai/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "samurai/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "samurai/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize) => {
    return async (dispatсh) => {
        dispatсh(toggleIsFetching(true));
        dispatсh(setCurrentPage(page));
        let data =  await usersAPI.getUsers(page, pageSize);
        dispatсh(toggleIsFetching(false));
        dispatсh(setUsers(data.items));
        dispatсh(setTotalUsersCount(data.totalCount));
    }
}

const followUnfolowFlow = async (dispatсh, userId, apiMethod, actionCreator, isFetching) => {
    dispatсh(toggleIsFetching(true));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatсh(actionCreator(userId));
    }
    dispatсh(toggleFollowingProgress(isFetching, userId));
}

export const follow = (userId) => {
    return async (dispatсh) => {
        followUnfolowFlow(dispatсh, userId, usersAPI.follow.bind(usersAPI), followSuccess, true)
    }
}

export const unfollow = (userId) => {
    return async (dispatсh) => {
        followUnfolowFlow(dispatсh, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, false)
    }
}

export default usersReducer;