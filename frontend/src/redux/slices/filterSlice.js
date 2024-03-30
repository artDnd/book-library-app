import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	title: '',
	author: '',
	onlyFavorite: false,
}

const filterSlice = createSlice({
	name: 'title',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			return { ...state, title: action.payload }
		},
		setAuthorFilter: (state, action) => {
			return { ...state, author: action.payload }
		},
		setOnlyFavoriteFilter: state => {
			return { ...state, onlyFavorite: !state.onlyFavorite }
		},
		setResetFilter: () => {
			return initialState
		},
	},
})
export const {
	setTitleFilter,
	setResetFilter,
	setAuthorFilter,
	setOnlyFavoriteFilter,
} = filterSlice.actions

export default filterSlice.reducer
