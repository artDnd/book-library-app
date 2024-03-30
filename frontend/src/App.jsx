import './App.scss'
import { BookFilters } from './components/book-filters/BookFilters'
import { BookForm } from './components/book-form/BookForm'
import { BookList } from './components/book-list/BookList'
import { Error } from './components/error/Error'

function App() {
	return (
		<div className='app'>
			<main className='app-main'>
				<section className='app-section-left'>
					<BookForm />
				</section>
				<section className='app-section-right'>
					<div className='app-filters'>
						<BookFilters />
					</div>
					<div className='app-list'>
						<BookList />
					</div>
				</section>
			</main>
			<Error />
		</div>
	)
}

export default App
