import CloseIcon from '@mui/icons-material/Close'
import { Drawer, Grid, Typography } from '@mui/material'
import React from 'react'

interface FilePropertiesProps {
	selectedFile: {
		__typename: string
		size: string
		type: string
		uploadTime: string
		folderId: string
		uploadedBy: string
		fileName: string
		fileId: string
	}
	onCloseSubmenu: () => void
	property: boolean
}

const FileProperties: React.FC<FilePropertiesProps> = ({
	selectedFile,
	onCloseSubmenu,
	property
}) => {
	console.log('Property', selectedFile)
	return (
		<Drawer
			open={property}
			anchor="right"
			onClose={onCloseSubmenu}
			sx={{
				'& .MuiBackdrop-root': {
					backgroundColor: 'rgba(0, 0, 0, 0)'
				}
			}}
		>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				marginBottom={2}
				sx={{ padding: '20px' }}
			>
				<Grid item>
					<Typography variant="h5">{selectedFile.fileName}</Typography>
				</Grid>
				<Grid item>
					<CloseIcon onClick={onCloseSubmenu} />
				</Grid>
			</Grid>
			<Grid
				item
				sx={{
					padding: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px'
				}}
			>
				<Typography variant="body1">Size: {selectedFile.size}</Typography>
				<Typography variant="body1">
					Uploaded by: {selectedFile.type}
				</Typography>
				<Typography variant="body1">
					Last modified: {selectedFile.uploadedBy + selectedFile.uploadTime}
				</Typography>
			</Grid>
		</Drawer>
	)
}

export default FileProperties
