import { createSlice } from "@reduxjs/toolkit";

export const culturesSlice = createSlice({
    name: "cultures",
    initialState: {
        cultures: [],
        isFetching: false,
        isFetchingDelete: false,
        error: false,
        errorDelete: false,
    },
    reducers: {
        //GET ALL
        getCulturesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCulturesSuccess: (state, action) => {
            state.isFetching = false;
            state.cultures = action.payload;
        },
        getCulturesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteCulturesStart: (state) => {
            state.isFetchingDelete = true;
            state.errorDelete = false;
        },
        deleteCulturesSuccess: (state, action) => {
            state.isFetchingDelete = false;
            state.cultures.splice(
                state.cultures.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteCulturesFailure: (state) => {
            state.isFetchingDelete = false;
            state.errorDelete = true;
        },
    },
});

export const {
    getCulturesStart,
    getCulturesSuccess,
    getCulturesFailure,
    deleteCulturesStart,
    deleteCulturesSuccess,
    deleteCulturesFailure,
} = culturesSlice.actions;

export default culturesSlice.reducer;
