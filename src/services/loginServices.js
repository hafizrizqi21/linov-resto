import axios from 'axios'

export default {
    register(registerData) {
        return axios.post('http://localhost:3000/register', registerData)
    },
    login(loginData) {
        return axios.post('http://localhost:3000/login', loginData)
    },
}