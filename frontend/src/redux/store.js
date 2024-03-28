import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './slices/booksSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
	reducer: {
		books: booksSlice,
		filter: filterSlice,
	},
})
