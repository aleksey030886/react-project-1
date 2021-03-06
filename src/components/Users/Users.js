import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";



const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
        return <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u =>
                        <User user={u}
                              key={u.id}
                              follow={props.follow}
                              unfollow={props.unfollow} />
                    )
                }
            </div>
        </div>
    }


export default Users;