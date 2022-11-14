const TOKEN_KEY = 'access_token'
const USER = 'user'
const PERMISSIONS = 'permissions'
const TokenService = {
    setToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },
    setUser(userData) {
        localStorage.setItem(USER, userData)
    },
    getUser() {
        return localStorage.getItem(USER)
    },
    setPermissions(permissions) {
        localStorage.setItem(PERMISSIONS, permissions)
    },
    getPermissions() {
        return localStorage.getItem(PERMISSIONS)
    }
}
export {TokenService}