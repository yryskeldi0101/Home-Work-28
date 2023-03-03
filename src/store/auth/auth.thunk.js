import { createAsyncThunk } from '@reduxjs/toolkit'
import authServis from '../../lib/constans/authServis'
import { STORAGE_KEYS } from '../../lib/constans/common'

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await authServis.signUp(payload)
            const userData = data.data
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
            return userData
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
