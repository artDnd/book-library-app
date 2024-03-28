import { useState } from 'react'
import { useDispatch } from 'react-redux'
import books from '../../data/books.json'
import { addBook } from '../../redux/slices/booksSlice'
import { creatwBookWithID } from '../../utils/createBookWithID'
import styles from './BookForm.module.scss'

export function BookForm() {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const dispatch = useDispatch()

	function addRandomBook(e) {
		e.preventDefault()
		const randomIndex = Math.floor(Math.random() * books.length)
		const randomBook = books[randomIndex]
		const randomBookWithId = creatwBookWithID(randomBook)
		dispatch(addBook(randomBookWithId))
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (title && author) {
			console.log(title, author)
			const book = creatwBookWithID({ title, author })

			dispatch(addBook(book))
			setTitle('')
			setAuthor('')
		}
	}

	return (
		<form className={styles.form}>
			<label htmlFor='title'>TITLE:</label>
			<input
				className={styles.input}
				type='text'
				id='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<label htmlFor='title'>AUTHOR:</label>
			<input
				className={styles.input}
				type='text'
				id='author'
				value={author}
				onChange={e => setAuthor(e.target.value)}
			/>
			<button className={styles.bookBtn} onClick={handleSubmit}>
				ADD BOOK
			</button>
			<button className={styles.bookBtn} onClick={addRandomBook}>
				ADD RANDOM BOOK
			</button>
		</form>
	)
}
