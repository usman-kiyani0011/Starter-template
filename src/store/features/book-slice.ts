import { createSlice } from "@reduxjs/toolkit";

interface iii {
  books: {
    id: string;
    name: string;
    author: string;
    price: string;
  }[];
}

//  const books:bookss[] = []
const initialState: iii = {
  books: [],
};
const BookSlice = createSlice({
  name: "BookSlice",
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(action.payload);
      const value = action.payload;

      state.books.push(value);
    },
    editUsers: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.books.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.price = email;
      }
    },
    deleteUsers: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.books.filter(
        (user: { id: any }) => user.id === id
      );
      //   if (existingUser) {
      //     return state.filter((user) => user.id !== id);
      //   }
    },
  },
});

export const { addBook } = BookSlice.actions;
export default BookSlice.reducer;
