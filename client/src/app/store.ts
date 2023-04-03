import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasks";

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;