import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {cartAPI} from "../../api";
import {getItemsFromStorage} from "../../components/utils";

export const saveInCart = createAsyncThunk(
    'cart/saveInCart',
    async function (game) {
        await cartAPI.postGame(game)
        toggleCartProgress(game.id)
        return game
    }
)

export const deleteFromCart = createAsyncThunk(
    'cart/deleteFromCart',
    async function (gameId) {
        await cartAPI.deleteGame(gameId)
        return gameId
    }
)

export const getGamesFromCart = createAsyncThunk(
    'cart/getGamesFromCart',
    async function () {
        let result = await getItemsFromStorage()
        return result
    }
)


const cartSlice = createSlice({
    name:'cart',
    initialState: {
        itemsInCart: [],
        cartStatus: null,
        cartInProgress: []
    },
    reducers: {
        setItemInCart:(state,action) => {
            state.itemsInCart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify([...state.itemsInCart]))
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify([...state.itemsInCart]))
        },
        toggleCartProgress: (state, action) => {
            state.cartStatus === 'loading'
            ? state.cartInProgress.push(action.payload)
            : state.cartInProgress = state.cartInProgress.filter(id =>  +id !== +action.payload)
            console.log(action.payload)
        }
    },
    extraReducers: {
        [saveInCart.pending]: (state) => {
            state.cartStatus = 'loading'
        },
        [saveInCart.fulfilled]: (state, action) => {
            state.cartStatus = 'completed'
            toggleCartProgress(action.payload.id)
            state.cartInProgress = state.cartInProgress.filter(id => id !== action.payload.id)
            state.itemsInCart.push(action.payload)
        },
        [deleteFromCart.pending]: (state) => {
            state.cartStatus = 'loading'
        },
        [deleteFromCart.fulfilled]: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
            state.cartInProgress = state.cartInProgress.filter(id => id !== action.payload)
        },
        [getGamesFromCart.pending]: (state) => {
            state.cartStatus = 'loading'
        },
        [getGamesFromCart.fulfilled]: (state, action) => {
            state.cartStatus = 'completed'
            state.itemsInCart = action.payload
        },
    }
})

export const { setItemInCart, deleteItemFromCart, toggleCartProgress } = cartSlice.actions

export default cartSlice.reducer