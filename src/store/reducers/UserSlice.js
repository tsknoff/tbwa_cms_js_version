import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../models/IUser";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>){
            state.count += action.payload;
        }
    }
})

export default userSlice.reducer;