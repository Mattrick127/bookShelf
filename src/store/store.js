import { configureStore } from '@redux/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterRedcuer
    }
})