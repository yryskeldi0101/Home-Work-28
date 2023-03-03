import { axiosInstace } from '../axiosInstace'

const signUp = (data) => {
    return axiosInstace.post('/auth/register', data)
}

export default {
    signUp,
}
