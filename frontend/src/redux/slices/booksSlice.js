import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createBookWithID } from '../../utils/createBookWithID'
const initialState = []

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
	const res = await axios.get('http://localhost:4000/random-book')
	return res.data
})

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook: (state, action) => {
			return [...state, action.payload]
		},
		deleteBook: (state, action) => {
			return state.filter(book => book.id !== action.payload)
		},
		toggleFavorite: (state, action) => {
			return state.map(book =>
				book.id === action.payload
					? { ...book, isFavorite: !book.isFavorite }
					: book
			)
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchBook.fulfilled, (state, action) => {
			if (action.payload.title && action.payload.author) {
				return [...state, createBookWithID(action.payload, 'API')]
				// return state.push(createBookWithID(action, 'API')) //
			}
		})
	},
})

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions

export const thunkFunction = async (dispatch, getState) => {
	console.log(getState())
	try {
		const res = await axios.get('http://localhost:4000/random-book')
		if (res?.data?.title && res?.data?.author) {
			dispatch(addBook(createBookWithID(res.data, 'API')))
			console.log(res.data)
		}
	} catch (error) {
		console.log('Error fetching random book', error)
	}
	console.log(getState())
}

export default booksSlice.reducer
