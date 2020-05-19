import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';



let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currenPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currenPage: action.pageNumber }
        case SET_TOTAL_USERS:
            return { ...state, totalUserCount: action.totalUserCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }


}


export const followUserSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowUserSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPages = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalUserCount) => ({ type: SET_TOTAL_USERS, totalUserCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (userId, isFollowingProgress) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, userId, isFollowingProgress })



// thunks 

export const getUsers = (currenPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currenPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        
        dispatch(toggleIsFollowingProgress(userId, true));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch (followUserSuccess(userId));
                }
            })
            dispatch(toggleIsFollowingProgress(userId, false));
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        
        dispatch(toggleIsFollowingProgress(userId, true));
        usersAPI.unFollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch (unFollowUserSuccess(userId));
                }
            })
            dispatch(toggleIsFollowingProgress(userId, false));
    }
}

export default usersReducer;