import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {getAuthUserData, login, logout, setAuthUserData} from "../../redux/reducer/auth-reducer";

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         setAuthUserData: (newMessageBody) => {
//             dispatch(sendMessageActionCreator(newMessageBody))
//         },
//         getAuthUserData: (newMessageBody) => {
//             dispatch(sendMessageActionCreator(newMessageBody))
//         },
//         login: (newMessageBody) => {
//             dispatch(sendMessageActionCreator(newMessageBody))
//         },
//         : () => {
//             dispatch(sendMessageActionCreator(newMessageBody))
//         },
//     }
// }

export default
    compose(connect(mapStateToProps, {setAuthUserData, getAuthUserData, login, logout}),
        withRouter,
        withAuthRedirect
    )(Login);