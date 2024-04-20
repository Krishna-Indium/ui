import CloseIcon from '@mui/icons-material/Close'
import {
	Drawer,
	Grid,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import React from 'react'

interface FileHistoryProps {
	selectedFile: {
		name: string
		size?: string | number
		type: string
		lastModified?: string
	}
	onCloseSubmenu: () => void
	history: boolean
}

const FileHistory: React.FC<FileHistoryProps> = ({
	selectedFile,
	onCloseSubmenu,
	history
}) => {
	const tableHeaders = ['Version', 'Last Modified', 'Size']
	return (
		<Drawer
			anchor="right"
			onClose={onCloseSubmenu}
			open={history}
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
					<Typography variant="h5">Version History</Typography>
				</Grid>
				<Grid item>
					<CloseIcon onClick={onCloseSubmenu} />
				</Grid>
			</Grid>
			<TableContainer>
				<TableHead>
					<TableRow>
						{tableHeaders.map((val, ind) => {
							return <TableCell key={ind}>{val}</TableCell>
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>1.0</TableCell>
						<TableCell>{selectedFile.lastModified}</TableCell>
						<TableCell>{selectedFile.size}</TableCell>
					</TableRow>
				</TableBody>
			</TableContainer>
		</Drawer>
	)
}

export default FileHistory
