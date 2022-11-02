import { createSlice } from "@reduxjs/toolkit"

const myProductSliceReduser = createSlice({
    name: "Products",
    initialState: [],
    reducers: {
        addMyProducts( state , action ){
            state.push(action.payload); 
        },
    }
})

export const { addMyProducts } = myProductSliceReduser.actions
export default myProductSliceReduser.reducer


  
