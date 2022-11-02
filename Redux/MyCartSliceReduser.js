import { createSlice } from "@reduxjs/toolkit"

const myCartSliceReduser = createSlice({
    name: "Carts",
    initialState: [],
    reducers: {
        addMyCarts( state , action ){
            let myIndex = -1;
            state.map( (item , index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {
                state.push(action.payload);
            }else{
                state[myIndex].qty = state[myIndex].qty + 1 ;
            }
        },
        removeItem( state, action){
            let myIndex = -1;
            state.map( (item , index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            })
            if (myIndex == -1) {
                // state.push(action.payload);
            }else{
                state[myIndex].qty = state[myIndex].qty - 1 ;
            }
            // else{
            // }
        },
        deleteCartItem( state, action){
            return (state = state.filter( item => item.id !== action.payload ) )
        },
        deleteCart( state, action){
            return (state = state.filter( item => item.id !== action.payload ) )
        },
    }
})

export const { addMyCarts , removeItem , deleteCartItem , deleteCart } = myCartSliceReduser.actions
export default myCartSliceReduser.reducer


  
