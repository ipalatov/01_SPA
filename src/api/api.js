import * as axios from 'axios';


const myAxios = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '3cc55124-4224-4d6b-b2bd-af412563b869' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',

})

export const usersAPI = {
    getUsers(currenPage = 1, pageSize = 10) {
        return myAxios.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(id) {
        return myAxios.post(`follow/${id}`)
    },

    unFollowUser(id) {
        return myAxios.delete(`follow/${id}`)
    },



}

export const authAPI = {
    authMe() {
        return myAxios.get('auth/me')
    },

    login(email, password, rememberMe = false) {
        return myAxios.post('auth/login', { email, password, rememberMe })
    },

    logout() {
        return myAxios.delete('auth/login')
    }
}


export const profileAPI = {
    getProfile(userId) {
        return myAxios.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return myAxios.get(`profile/status/${userId}`)
    },

    updateStatus(newStatus) {
        return myAxios.put(`profile/status/`, { "status": newStatus })
    },



}
