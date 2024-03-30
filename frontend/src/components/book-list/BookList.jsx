import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/slices/booksSlice'
import styles from './BookList.module.scss'
export function BookList() {
	const dispatch = useDispatch()

	const books = useSelector(state => state.books)
	const filterTitle = useSelector(state => state.filter.title)
	const filterAuthor = useSelector(state => state.filter.author)
	const onlyFavoriteFilter = useSelector(state => state.filter.onlyFavorite)
	const filteredBooks = books.filter(book => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(filterTitle.toLowerCase())
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(filterAuthor.toLowerCase())
		const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
		return matchesTitle && matchesAuthor && matchesFavorite
	})

	function toggleFavoriteBtn(id) {
		dispatch(toggleFavorite(id))
	}
	function handleDeleteBook(id) {
		dispatch(deleteBook(id))
	}

	function hightlightMatch(text, filter) {
		if (!filter) return text
		const regExp = new RegExp(`(${filter})`, 'gi')

		return text.split(regExp).map((substring, i) => {
			if (substring.toLowerCase() === filter.toLowerCase()) {
				return (
					<span className={styles.highlight} key={i}>
						{substring}
					</span>
				)
			}
			return substring
		})
	}

	return (
		<div className={styles.bookList}>
			<div className={styles.title}>book list</div>
			<ul className={styles.unList}>
				{books.length === 0 ? (
					<p>books is chika</p>
				) : (
					filteredBooks.map((book, i) => {
						return (
							<li className={styles.listElement} key={i}>
								<p>
									{++i}. {hightlightMatch(book.title, filterTitle)} by{' '}
									<strong>{hightlightMatch(book.author, filterAuthor)}</strong>{' '}
									({book.source})
								</p>{' '}
								<div className={styles.btnBlock}>
									{book.isFavorite ? (
										<BsBookmarkStarFill
											className={styles.btnFav}
											onClick={() => toggleFavoriteBtn(book.id)}
										/>
									) : (
										<BsBookmarkStar
											className={styles.btnFav}
											onClick={() => toggleFavoriteBtn(book.id)}
										/>
									)}
									<button
										className={styles.btn}
										onClick={() => handleDeleteBook(book.id)}
									>
										X
									</button>
								</div>
							</li>
						)
					})
				)}
			</ul>
		</div>
	)
}
