import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    requestUsers,
    unfollow,
    toggleIsFetching,
    toggleFollowingProgress
} from "../../redux/reducer/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getUsersSelector, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers().then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    }

    render() {
        return <>
            <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          toggleFollowingProgress={this.props.toggleFollowingProgress}
                          followingInProgress={this.props.followingInProgress}
            />
            </div>
        </>
    }
}

// let mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.isFetching   // урок номер 81 фоловеры добавить 14 минута
//     }
// }

let mapStateToProps = (state) => {
    return{
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps,{
        follow, unfollow, getUsers: requestUsers,
        setCurrentPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowingProgress})
)(UsersContainer)