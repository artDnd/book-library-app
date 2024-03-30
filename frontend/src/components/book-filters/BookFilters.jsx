import { useDispatch, useSelector } from 'react-redux'
import {
	setAuthorFilter,
	setOnlyFavoriteFilter,
	setResetFilter,
	setTitleFilter,
} from '../../redux/slices/filterSlice'
import styles from './BookFilters.module.scss'

export function BookFilters() {
	const dispatch = useDispatch()
	const titleFilter = useSelector(state => state.filter.title)
	const authorFilter = useSelector(state => state.filter.author)
	const onlyFavoriteFilter = useSelector(state => state.filter.onlyFavorite)

	function handleOnlyFavoriteFilterChange() {
		dispatch(setOnlyFavoriteFilter())
	}
	function handleTitleFilterChange(e) {
		dispatch(setTitleFilter(e))
	}
	function handleAuthorFilterChange(e) {
		dispatch(setAuthorFilter(e))
	}
	function handleResetFilter() {
		dispatch(setResetFilter())
	}

	return (
		<div className={styles.filters}>
			<span>Filter list</span>
			<div>
				<input
					type='text'
					placeholder='Filter books by title... '
					value={titleFilter}
					onChange={e => handleTitleFilterChange(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Filter books by author... '
					value={authorFilter}
					onChange={e => handleAuthorFilterChange(e.target.value)}
				/>
				<button className={styles.btn} onClick={handleResetFilter}>
					RESET FILTER
				</button>
				<label className={styles.favorite}>
					<input
						onChange={handleOnlyFavoriteFilterChange}
						className={styles.check}
						checked={onlyFavoriteFilter}
						type='checkbox'
					/>{' '}
					Only Favorite
				</label>
			</div>
		</div>
	)
}
