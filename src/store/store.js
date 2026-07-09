import { configureStore } from '@redux/toolkit'
import booksReducer from './booksSlice.js';


export default configureStore({
    reducer: {
        books: booksReducer 
    }
})