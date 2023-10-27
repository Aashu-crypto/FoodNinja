import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    screen: 'MAIN',
  };


export const screenSlice = createSlice({

    name:'screen',
    initialState,
    reducers:{
        screen:(state,action)=>{
                state.value=action.payload
        }

    }
})

export const {screen} = screenSlice.actions;
export default screenSlice.reducer;