import React from 'react';
import s from './users.module.css';
import Paginator from '../common/paginator/paginator';
import User from './user';


let Users = ({ totalUserCount, pageSize, onPageChanged, currenPage, users, followingInProgress, follow, unFollow, ...props }) => {

    return (

        <div className={s.users_block}>
            <Paginator totalUserCount={totalUserCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currenPage={currenPage} />

            {users.map(us => (<User
                followingInProgress={followingInProgress}
                follow={follow}
                unFollow={unFollow}
                user={us}
                key={us.id}
            />
            ))}
        </div>
    )
}

export default Users;