import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { Redirect } from "react-router-dom";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const getCaptchaURLSuccess = (captchaURL) => ({ type: GET_CAPTCHA_URL, captchaURL })

// thunks


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: message }));

        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }


    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaURL = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(getCaptchaURLSuccess(captchaURL));
}





export default authReducer;