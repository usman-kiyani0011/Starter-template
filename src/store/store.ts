import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import bookReducer from "./features/book-slice";
const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
