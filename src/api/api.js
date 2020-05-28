import * as axios from 'axios';


const myAxios = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '014ca01a-a620-4565-abdf-f435cf72fc22' },
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

    login(email, password, rememberMe = false, captcha = null) {
        return myAxios.post('auth/login', { email, password, rememberMe, captcha })
    },

    logout() {
        return myAxios.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return myAxios.get('security/get-captcha-url')
    },

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

    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file);
        return myAxios.put(`profile/photo/`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return myAxios.put(`profile`, profile)
    },
}
