import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'

interface CustomSnackbarProps {
	open: boolean
	handleClose: () => void
	msg: string
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
	open,
	handleClose,
	msg
}) => {
	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		>
			<CloseIcon />
		</IconButton>
	)

	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
			message={msg}
			action={action}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			sx={{ backgroundColor: 'white' }}
		/>
	)
}

export default CustomSnackbar
