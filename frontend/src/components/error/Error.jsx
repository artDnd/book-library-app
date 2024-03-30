import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'

export function Error() {
	const dispatch = useDispatch()
	const errorMessage = useSelector(selectErrorMessage) // (state) => state.error

	useEffect(() => {
		if (errorMessage) {
			toast.info(errorMessage)
			dispatch(clearError())
		}
	}, [errorMessage, dispatch])
	return <ToastContainer position='top-right' autoClose={2000} />
}
