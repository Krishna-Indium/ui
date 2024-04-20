import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import GetAppIcon from '@mui/icons-material/GetApp'
import HistoryIcon from '@mui/icons-material/History'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

interface Props {
	// eslint-disable-next-line @typescript-eslint/member-delimiter-style
	contextMenuPosition: { top: number; left: number } | null
	handleCloseContextMenu: () => void
	handleProperties: () => void
	handleHistory: () => void
	handleDeleteFile: () => void
	handleDownloadFile: () => void
	handleRenameModal: () => void
	forFolder: boolean
}

const CustomMenu: React.FC<Props> = ({
	contextMenuPosition,
	handleCloseContextMenu,
	handleProperties,
	handleHistory,
	handleDeleteFile,
	handleDownloadFile,
	handleRenameModal,
	forFolder
}) => {
	return (
		<>
			{contextMenuPosition && (
				<Menu
					open={true}
					onClose={handleCloseContextMenu}
					anchorReference="anchorPosition"
					anchorPosition={{
						top: contextMenuPosition.top,
						left: contextMenuPosition.left
					}}
				>
					<MenuItem onClick={handleDeleteFile} disabled={forFolder}>
						<ShareIcon sx={{ marginRight: 1 }} /> Share
					</MenuItem>
					<MenuItem onClick={handleCloseContextMenu} disabled={forFolder}>
						<VisibilityIcon sx={{ marginRight: 1 }} /> Preview
					</MenuItem>
					<MenuItem onClick={handleDownloadFile} disabled={forFolder}>
						<GetAppIcon sx={{ marginRight: 1 }} /> Download
					</MenuItem>
					<MenuItem onClick={handleProperties} disabled={forFolder}>
						<SettingsIcon sx={{ marginRight: 1 }} /> Properties
					</MenuItem>
					<MenuItem onClick={handleHistory} disabled={forFolder}>
						<HistoryIcon sx={{ marginRight: 1 }} /> History
					</MenuItem>
					<MenuItem onClick={handleRenameModal} disabled={forFolder}>
						<DriveFileRenameOutlineIcon sx={{ marginRight: 1 }} /> Rename
					</MenuItem>
					<MenuItem onClick={handleDeleteFile}>
						<DeleteIcon sx={{ marginRight: 1 }} /> Delete
					</MenuItem>
				</Menu>
			)}
		</>
	)
}

export default CustomMenu
