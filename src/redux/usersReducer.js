const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';



let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currenPage: 1,
    isFetching: false,
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
            return {...state, totalUserCount: action.totalUserCount}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching }
        default:
            return state;
    }


}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPagesAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCountAC = (totalUserCount) => ({ type: SET_TOTAL_USERS, totalUserCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching  })



export default usersReducer;