import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const createPlot = createAsyncThunk(
    'plot/CREATE',
    async (id) => {
        return {
            [id]: {
                crop: '',
                ability: '',
                boosts: []
            }
        }
    }
);

export const updatePlot = createAsyncThunk(
    'plot/UPDATE',
    async (id, crop, ability, boosts) => {
        return {
            [id]: {
                crop: crop,
                ability: ability,
                boosts: [...boosts]
            }
        }
    }
);

export const clearAllPlots = createAction('plot/CLEAR_ALL');

export const plotSlice = createSlice({
    name: 'plot',
    initialState,
    extraReducers: builder => {
        builder.addCase(createPlot.fulfilled, (state, action) => {
            state = {...state, ...action.payload};
            return state;
        });

        builder.addCase(updatePlot.fulfilled, (state, action) => {
            state = {...state, ...action.payload};
            return state;
        });

        builder.addCase(clearAllPlots, () => initialState);
    }
})