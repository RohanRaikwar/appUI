import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string[]
}

const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    incrementByAmount: (state, action) => {
      state.value = action.payload;
      console.log(state.value)
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export default counterSlice.reducer