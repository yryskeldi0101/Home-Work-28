import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS } from '../../lib/constans/common'
import { signUp } from './auth.thunk'

const getInitialUser = () => {
    const jsonData = localStorage.getItem(STORAGE_KEYS.AUTH)
    if (jsonData) {
        const userData = JSON.parse(jsonData)
        return userData
    }
    return jsonData
}
const initialState = {
    isAuthorized: false,
    ...getInitialUser(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(signUp.fulfilled, (state, action) => {
            state.isAuthorized = true
            state.token = action.payload.token
            state.user = {
                name: action.payload.user.name,
                email: action.payload.user.email,
                role: action.payload.user.role,
            }
        })
    },
})

export default authSlice
