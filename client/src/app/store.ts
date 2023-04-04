import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasks";
import { tasksApi } from "../apis/tasksApi";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,

        [tasksApi.reducerPath]: tasksApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tasksApi.middleware)
    
})
// Export the type for root state
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;