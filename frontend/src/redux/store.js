import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './slices/booksSlice'
import errorSlice from './slices/errorSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
	reducer: {
		books: booksSlice,
		filter: filterSlice,
		error: errorSlice,
	},
})
