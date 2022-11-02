import {configureStore} from "@reduxjs/toolkit"
import MyProductSliceReduser from "./MyProductSliceReduser"
import MyCartSliceReduser from "./MyCartSliceReduser"

export const myStore = configureStore({
    reducer: {
        product: MyProductSliceReduser,
        cart: MyCartSliceReduser
    }
});
  