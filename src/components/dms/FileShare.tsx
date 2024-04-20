import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'

interface ModalProps {
	open: boolean
	onClose: () => void
	title: string
	handleConfirm: () => void
	confirmButtonText: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	textFieldValue: string
}

const FileShare: React.FC<ModalProps> = ({
	open,
	onClose,
	title,
	handleConfirm,
	confirmButtonText,
	handleChange,
	textFieldValue
}) => {
	const style = {
		position: 'absolute' as const,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4
	}

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<CloseIcon onClick={onClose} />
				</div>
				<TextField
					id="outlined-basic"
					label="Add email"
					variant="outlined"
					size="small"
					sx={{ marginTop: '30px', width: '100%' }}
					onChange={handleChange}
					value={textFieldValue}
				/>
				<div
					style={{
						marginTop: '30px',
						display: 'flex',
						justifyContent: 'flex-end',
						gap: '10px'
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						sx={{
							backgroundColor: '#4caf50',
							color: 'white',
							':hover': {
								backgroundColor: '#3d9b40'
							}
						}}
						onClick={handleConfirm}
						disabled={textFieldValue.length === 0}
					>
						{confirmButtonText}
					</Button>
					<Button
						variant="contained"
						onClick={onClose}
						sx={{
							backgroundColor: 'white',
							color: 'GrayText',
							':hover': {
								backgroundColor: 'transparent'
							}
						}}
					>
						CANCEL
					</Button>
				</div>
			</Box>
		</Modal>
	)
}

export default FileShare
