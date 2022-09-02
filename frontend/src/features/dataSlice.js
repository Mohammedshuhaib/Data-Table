import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import dataService from './dataService'

let dataChart = JSON.stringify(localStorage.getItem('data'))
const initialState = {
    dataChart: dataChart || null,
}

export const data = createAsyncThunk('/getData', async(_,thunkAPI) => {
    try {
        return await dataService.data()
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue(err)
    }
})

export const dataSlice = createSlice({
    name : 'graphData',
    initialState,
    reducers: {
        filter: (state,action) => {
         state.dataChart = action.payload
        },
        allData: (state,action) => {
            state.dataChart = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(data.fulfilled,(state,action) => {
            state.dataChart= action.payload
        })
    }
})

export const {filter, allData} = dataSlice.actions
export default dataSlice.reducer
