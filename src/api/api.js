import * as axios from "axios";
import React from "react";

const instanse = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data
            )
    },
    getUsers2(currentPage, pageSize) {
        return instanse.post(`follow?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data
            )
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`unfollow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status: status});
    },
}

export const dialogsAPI = {
    getDialogs() {
        return instanse.get(`dialogs`, { withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            });
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

