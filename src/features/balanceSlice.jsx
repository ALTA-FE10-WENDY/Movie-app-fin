import { createSlice } from "@reduxjs/toolkit";

// const initialState = { data: [] }

const balanceSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFavorite(state, action) {
            const newFavorite = {
                id: action.payload.id,
                title: action.payload.title,
                overview: action.payload.overview,
                poster_path: action.payload.poster_path,
            }

            state.push(newFavorite)

        },
        deleteFavorite(state, action) {
            return state.filter((item) =>
                item.id != action.payload.id
            )
            
        }
    },
})

export const { addFavorite, deleteFavorite } = balanceSlice.actions;

export default balanceSlice.reducer