/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@apollo/client'
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import React, { useState } from 'react'
import CustomMenu from './CustomMenu'
import CustomModal from './CustomModal'
import CustomSnackbar from './CustomSnackbar'
import DmsHeader from './DmsHeader'
// import FileHistory from './FileHistory'
import FileInfo from './FileProperties'
import FileProperties from './FileProperties'
import FileRename from './FileRename'
import FileShare from './FileShare'
import { RENAME_FILE } from './queries'

interface FileItem {
	files: FileItem[]
	folders: FileItem[]
	folderId: string
	folderName: string
	folderPath?: string
	__typename: string
	parentFolderId?: FileItem
	fileId: string
	fileName: string
	size: string
	type: string
	uploadTime: string
	uploadedBy: string
}

export interface FolderViewProps {
	modal: boolean
	createFile: string
	setCreateFile?: React.Dispatch<React.SetStateAction<string>>
	open: boolean
	msg: string
	isDraggingOver: boolean
	setIsDraggingOver?: React.Dispatch<React.SetStateAction<boolean>>
	fileRef: React.RefObject<HTMLInputElement>
	contextMenuPosition: { top: number; left: number } | null
	setContextMenuPosition?: React.Dispatch<
		React.SetStateAction<{ top: number; left: number } | null>
	>
	property: boolean
	history: boolean
	selectedFile: FileItem | null
	currentFolder: FileItem
	currentPath: string[]
	getFileIcon: (filename: string) => React.ReactNode
	handleModal: () => void
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleCreate: () => void
	handleDrop: (event: any) => void
	handleDragOver: (event: any) => void
	handleClose: () => void
	handleFileChange: (event: any) => void
	handleButtonClick: () => void
	handleDragLeave: () => void
	handleCloseContextMenu: () => void
	handleProperties: () => void
	handleHistory: () => void
	handleContextMenu: (
		event: React.MouseEvent<HTMLTableRowElement>,
		file: FileItem
	) => void
	handleCloseSubmenu: () => void
	goBack: () => void
	handleBreadcrumbClick: (index: number) => void
	openFolder: (folder: FileItem) => void
	renderBreadcrumbs: () => React.ReactNode
	handleDeleteFile: () => void
	handleDownloadFile: () => void
	refetchListData: () => void
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	setmsg: React.Dispatch<React.SetStateAction<string>>
	onlyFolder: boolean
}

const FolderView: React.FC<FolderViewProps> = ({
	modal,
	createFile,
	open,
	msg,
	isDraggingOver,
	fileRef,
	contextMenuPosition,
	property,
	history,
	selectedFile,
	currentFolder,
	getFileIcon,
	handleModal,
	handleChange,
	handleCreate,
	handleDrop,
	handleDragOver,
	handleClose,
	handleFileChange,
	handleButtonClick,
	handleDragLeave,
	handleCloseContextMenu,
	handleProperties,
	handleHistory,
	handleContextMenu,
	handleCloseSubmenu,
	openFolder,
	renderBreadcrumbs,
	handleDeleteFile,
	handleDownloadFile,
	refetchListData,
	setOpen,
	setmsg,
	onlyFolder
}) => {
	const [rename, setRename] = useState<boolean>(false)

	const [renameFile, setRenameFile] = useState('')

	const [renameDocument] = useMutation(RENAME_FILE)

	const handleChangeRename = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setRenameFile(e.target.value)
	}

	const handleRename = async () => {
		try {
			await renameDocument({
				variables: {
					fileId: selectedFile?.fileId,
					newFileName: renameFile
				}
			})

			refetchListData()
			handleRenameModal()
			handleCloseContextMenu()
			setOpen(true)
			setmsg('Document renamed')
		} catch (error) {
			console.log(error)
		}
	}

	const handleRenameModal = (): void => {
		if (selectedFile?.__typename === 'File') {
			setRename((prev) => !prev)
			setRenameFile(selectedFile.fileName)
			handleCloseContextMenu()
		}
	}
	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			{/* toast */}
			<CustomSnackbar open={open} handleClose={handleClose} msg={msg} />
			{/* modal */}
			<div>
				<CustomModal
					open={modal}
					onClose={handleModal}
					title="Create a folder"
					handleConfirm={handleCreate}
					confirmButtonText="CREATE"
					handleChange={handleChange}
					textFieldValue={createFile}
				/>
			</div>
			<Paper
				elevation={3}
				style={{
					width: '93vw',
					padding: '20px',
					height: '99vh',
					marginLeft: '1%',
					overflowY: 'scroll',
					border: isDraggingOver ? '2px dashed green' : 'none'
				}}
			>
				{/* header */}
				<div>
					<DmsHeader
						handleModal={handleModal}
						handleButtonClick={handleButtonClick}
						handleFileChange={handleFileChange}
						fileRef={fileRef}
					/>
				</div>
				{/* Breadcrumbs */}
				{/* <div style={{ marginTop: '1.5%', marginLeft: '0.5%' }}>
					{renderBreadcrumbs()}
				</div> */}
				<Paper>
					<TableContainer sx={{ marginTop: '2%' }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>File Name</TableCell>
									<TableCell>Size</TableCell>
									<TableCell>Type</TableCell>
									<TableCell>Last Modified</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{currentFolder?.folders?.map((row: FileItem, ind) => (
									<TableRow
										key={ind}
										onClick={() => {
											openFolder(row)
										}}
										onContextMenu={(event) => {
											handleContextMenu(event, row)
										}}
										sx={{
											':hover': {
												cursor: 'pointer'
											}
										}}
									>
										<TableCell>
											<div style={{ display: 'flex', alignItems: 'center' }}>
												{getFileIcon(row.__typename)}
												{row.folderName}
											</div>
										</TableCell>
										<TableCell>1MB</TableCell>
										<TableCell>{row.__typename}</TableCell>
										<TableCell>Anonymous</TableCell>
									</TableRow>
								))}

								{currentFolder?.files?.map((row: FileItem, ind) => (
									<TableRow
										key={ind}
										// onClick={() => {
										// 	openFolder({ ...row, parent: currentFolder })
										// }}
										onContextMenu={(event) => {
											handleContextMenu(event, row)
										}}
										sx={{
											':hover': {
												cursor: 'pointer'
											}
										}}
									>
										<TableCell>
											<div style={{ display: 'flex', alignItems: 'center' }}>
												{getFileIcon(row.__typename)}
												{row.fileName}
											</div>
										</TableCell>
										<TableCell>{row.size}</TableCell>
										<TableCell>{row.__typename}</TableCell>
										<TableCell>{row.uploadedBy + row.uploadTime}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
				{/* sidemnenu */}
				<CustomMenu
					contextMenuPosition={contextMenuPosition}
					handleCloseContextMenu={handleCloseContextMenu}
					handleProperties={handleProperties}
					handleHistory={handleHistory}
					handleDeleteFile={handleDeleteFile}
					handleDownloadFile={handleDownloadFile}
					handleRenameModal={handleRenameModal}
					forFolder={onlyFolder}
				/>
			</Paper>
			{/* propery panel */}
			{property && selectedFile && (
				<FileProperties
					selectedFile={selectedFile}
					onCloseSubmenu={handleCloseSubmenu}
					property={property}
				/>
			)}
			{/* history panel */}
			{/* {history && selectedFile && (
				<FileHistory
					selectedFile={selectedFile}
					onCloseSubmenu={handleCloseSubmenu}
					history={history}
				/>
			)} */}

			{/* rename modal */}
			<div>
				<FileRename
					open={rename}
					onClose={handleRenameModal}
					title="Rename"
					handleConfirm={handleRename}
					confirmButtonText="Update"
					handleChange={handleChangeRename}
					textFieldValue={renameFile}
				/>
			</div>

			{/* sharable link */}
			{/* <div>
				<FileShare
					open={rename}
					onClose={handleRenameModal}
					title="Share"
					handleConfirm={handleRename}
					confirmButtonText="SEND"
					handleChange={handleChangeRename}
					textFieldValue={renameFile}
				/>
			</div> */}
		</div>
	)
}

export default FolderView
