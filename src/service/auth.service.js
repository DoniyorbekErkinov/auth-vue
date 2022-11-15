import { TokenService } from "@/store/storage.service";
import ApiService from "./api.service";
import store from "@/store/index";
import router from "@/router";

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message);
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const AuthService = {
    /**
         * Login the user and store the access token to TokenService.
         *
         * @returns access_token
         * @throws AuthenticationError
         *
         * 
    */
    login: async function (user) {
      await ApiService.post(`/api/v.1/auth-payload`, user).then(res => {
        TokenService.setToken(res.data.token)
        TokenService.setUser(JSON.stringify({
          username: res.data.username,
          id: res.data.id,
          deparmtnetId: res.data.department,
          role: res.data.roles.name,
      }))
        TokenService.setPermissions(res.data.roles.permissions)
        router.push('/')
      })  
    },
    logout() {

    }
}
export default AuthService;
export {AuthService, AuthenticationError};