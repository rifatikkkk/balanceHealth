import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios.js";


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ email, name, password }) => {
        try {
            const { data } = await axios.post('/user/register', {
                name, email, password
            })
            return data
        } catch (error) {
            alert(error.response?.data.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }) => {
        try {
            const { data } = await axios.post('/user/login', {
                email, password
            },)
            return data
        } catch (error) {
            alert(error.response?.data.message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async () => {
        try {
            await axios.get('/user/logout')
        } catch (error) {
            console.log(error.response?.data.message)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            state.error = false
        })
        builder.addCase(registerUser.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            state.error = false
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.loading = false
            state.error = true
        })

        builder.addCase(logoutUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.loading = false
            state.currentUser = null
            state.error = false
        })
        builder.addCase(logoutUser.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }
})

export default userSlice.reducer