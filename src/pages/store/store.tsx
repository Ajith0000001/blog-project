import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { BlogData, Item } from "../lib/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState: Item = {
  items: [],
};

const postSlice = createSlice({
  name: "formdata",
  initialState: initialState,
  reducers: {
    add(state, actions: PayloadAction<BlogData>) {
      const itemState = state.items;
      itemState.push(actions.payload);
    },

    delete(state, actions: PayloadAction<{ id: string | number }>): Item {
      const filteredItem = state.items.filter(
        (item) => item.id !== actions.payload.id
      );

      return {
        items: filteredItem,
      };
    },
    update(state, actions: PayloadAction<BlogData>) {
      const payload = actions.payload;

      const itemIndex = state.items.findIndex((item) => item.id === payload.id);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1, actions.payload);
      }
    },
  },
});

export const postScliceActions = postSlice.actions;
const postSliceReducer = postSlice.reducer;

export const store = configureStore({
  reducer: {
    postSlice: postSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
