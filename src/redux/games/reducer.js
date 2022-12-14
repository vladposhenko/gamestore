import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import axios from "axios";
import {gamesAPI as gamesApi} from "../../api";

export const fetchGames = createAsyncThunk (
    'games/fetchGames',
    async function () {
        const response = await gamesApi.getGames()
        console.log(response)
        return await response.data;
    }
)

export const fetchGame = createAsyncThunk (
    'games/fetchGame',
    async (gameId) => {
        debugger;
        const response = await gamesApi.getGame(gameId)
        return await response.data
    }
)

const gamesSlice = createSlice({
    name:'games',
    initialState: {
        items:[],
        currentGame: null,
        status: null,
        error: null,
        gameStatus:null,
        currentPage: 1,
        gamesPerPage: 6,
    },
    reducers: {
        setCurrentGame:(state,action) => {
            state.currentGame = action.payload
        },
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [fetchGames.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchGames.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.items = action.payload
        },
        [fetchGame.pending]: (state) => {
            state.gameStatus = 'loading'
        },
        [fetchGame.fulfilled] : (state, action) => {
            state.gameStatus = 'completed'
            state.currentGame = action.payload
        }
    }
})

export const { setCurrentGame, setCurrentPage } = gamesSlice.actions

export default gamesSlice.reducer