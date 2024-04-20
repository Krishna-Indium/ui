/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@apollo/client'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import React, { useEffect, useRef, useState } from 'react'
import FolderView from './FolderView'
import {
	CREATE_FOLDER,
	DELETE_FILE,
	DELETE_FOLDER,
	DOWNLOAD_FILE,
	LIST_FOLDER_FILES,
	OPEN_SUB_FOLDER,
	UPLOAD_FILE
} from './queries'

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

export interface FolderViewContainerProps {
	/**
	 * The root directory of the file system
	 */
	rootDir: string
}

const FolderViewContainer: React.FC<FolderViewContainerProps> = ({
	rootDir
}) => {
	const utility = 'nipsco'
	const {
		loading: listLoading,
		error: listError,
		data: listData,
		refetch: refetchListData
	} = useQuery(LIST_FOLDER_FILES, { variables: { utility } })
	const [uploadFile] = useMutation(UPLOAD_FILE)
	const [createFolder] = useMutation(CREATE_FOLDER)
	const [deleteFile] = useMutation(DELETE_FILE)
	const [downloadFile] = useMutation(DOWNLOAD_FILE)
	const [deleteFolder] = useMutation(DELETE_FOLDER)
	const { data: subFolderData } = useQuery(LIST_FOLDER_FILES)

	const [modal, setModal] = useState<boolean>(false)
	// const [rename, setRename] = useState<boolean>(false)

	// const [renameFile, setRenameFile] = useState('')
	const [createFile, setCreateFile] = useState('')

	const [open, setOpen] = useState<boolean>(false)
	const [msg, setmsg] = useState('')
	const [isDraggingOver, setIsDraggingOver] = useState(false)
	const fileRef = useRef<HTMLInputElement>(null)
	const [contextMenuPosition, setContextMenuPosition] = useState<{
		top: number
		left: number
	} | null>(null)
	const [property, setProperty] = useState(false)
	const [history, setHistory] = useState(false)
	const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)
	const [currentFolder, setCurrentFolder] = useState<FileItem>(listData)
	const [currentPath, setCurrentPath] = useState<string[]>(['My Files'])
	const [onlyFolder, setonlyFolder] = useState(false)

	const getFileIcon = (type: string): React.ReactNode => {
		if (type === 'Folder') {
			return <FolderIcon style={{ marginRight: '10px' }} />
		} else if (type === 'File') {
			return <InsertDriveFileIcon style={{ marginRight: '10px' }} />
		}
	}
	const handleModal = (): void => {
		setModal((prev) => !prev)
		setCreateFile('')
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCreateFile(e.target.value)
	}

	const handleCreate = async () => {
		try {
			await createFolder({
				variables: {
					folderName: createFile,
					utility: 'nipsco'
				}
			})
			refetchListData()
		} catch (error) {
			console.error('Error creating folder:', error)
		}
		setOpen(true)
		setmsg('Folder Created')
		setCreateFile('')
		handleModal()
	}
	const handleDrop = (event: any): void => {
		// setIsDraggingOver(false)
		// setOpen(true)
		// event.preventDefault()
		// const fileList = [...event.dataTransfer.files]
		// if (fileList[0].name.includes('.')) {
		// 	setmsg('File Uploaded')
		// } else {
		// 	setmsg('Folder Uploaded')
		// }
		// const formattedDate = new Date().toISOString().split('T')[0]
		// console.log(fileList)
		// const newFile = {
		// 	id: Math.floor(Math.random() * 146) + 55,
		// 	name: fileList[0].name,
		// 	size: `${fileList[0].size} KB`,
		// 	type: 'file',
		// 	lastModified: formattedDate
		// }
		// const files = [...listData.files, newFile]
		// setCurrentFolder({
		// 	id: 0,
		// 	name: 'root',
		// 	type: 'Folder',
		// 	files
		// })
	}

	const handleDragOver = (event: any): void => {
		event.preventDefault()
		setIsDraggingOver(true)
	}
	const handleClose = (): void => {
		setOpen(false)
	}
	// const handleFileChange = async (event: any) => {
	// setmsg('File uploaded')
	// setOpen(true)
	// const fileList = event.target.files
	// const formattedDate = new Date().toISOString().split('T')[0]
	// console.log(fileList)
	// const newFile = {
	// 	id: Math.floor(Math.random() * 146) + 55,
	// 	name: fileList[0].name,
	// 	size: `${fileList[0].size} KB`,
	// 	type: 'file',
	// 	lastModified: formattedDate
	// }
	// const files = [...listData.files, newFile]
	// setCurrentFolder({
	// 	id: 0,
	// 	name: 'root',
	// 	type: 'Folder',
	// 	files
	// })
	// }
	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = await event.target.files?.[0]
		if (file) {
			try {
				const response = await uploadFile({
					variables: { file: 'file', utility: 'nipsco' }
				})
				setOpen(true)
				setmsg('Folder created')
			} catch (error) {
				console.error('Error:', error)
			}
		}
	}

	const handleButtonClick = (): void => {
		fileRef.current?.click()
	}

	const handleDragLeave = (): void => {
		setIsDraggingOver(false)
	}
	const handleCloseContextMenu = (): void => {
		setContextMenuPosition(null)
	}

	const handleProperties = (): void => {
		handleCloseContextMenu()
		setHistory(false)
		setProperty(true)
	}
	const handleHistory = (): void => {
		handleCloseContextMenu()
		setHistory(true)
		setProperty(false)
	}
	const handleContextMenu = (
		event: React.MouseEvent<HTMLTableRowElement>,
		file: FileItem
	): void => {
		if (file.__typename === 'File') {
			event.preventDefault()
			setSelectedFile(file)
			setContextMenuPosition({ top: event.clientY, left: event.clientX })
			setonlyFolder(false)
		} else {
			event.preventDefault()
			setonlyFolder(true)
			setSelectedFile(file)
			setContextMenuPosition({ top: event.clientY, left: event.clientX })
		}
	}
	const handleCloseSubmenu = (): void => {
		setProperty(false)
		setHistory(false)
	}
	const goBack = () => {
		// console.log(currentFolder)
		// if (currentFolder.parent) {
		// 	setCurrentFolder(currentFolder.parent)
		// }
	}

	const handleBreadcrumbClick = (index: number): void => {
		// setCurrentPath(currentPath.slice(0, index + 1))
		// const folder: FileItem | undefined = findFolderByPath(
		// 	currentPath.slice(0, index + 1)
		// )
		// if (folder) {
		// 	setCurrentFolder(folder)
		// }
	}

	// const findFolderByPath = (path: string[]): FileItem | undefined => {
	// 	let current: FileItem | undefined = listData
	// 	for (let i = 1; i < path.length; i++) {
	// 		const folderName = path[i]
	// 		const folder: FileItem | undefined = current?.files?.find(
	// 			(file) => file.name === folderName && file.type === 'Folder'
	// 		)
	// 		if (!folder) break
	// 		current = folder
	// 	}
	// 	return current
	// }

	const openFolder = (folder: FileItem) => {
		if (folder.__typename === 'Folder') {
			console.log(folder.folderId)
			// const subData = await subFolderData
		}
	}

	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label="breadcrumb"
			>
				{currentPath.map((pathItem, index) => (
					<Link
						key={index}
						color="inherit"
						onClick={() => {
							handleBreadcrumbClick(index)
						}}
						style={{ textDecoration: 'none' }}
					>
						{pathItem}
					</Link>
				))}
			</Breadcrumbs>
		)
	}

	// useEffect(() => {
	// 	if (findData?.files[0] !== null) {
	// 		setCurrentFolder(findData)
	// 	}
	// }, [findData])
	const handleDeleteFile = async () => {
		if (selectedFile?.__typename === 'File') {
			try {
				await deleteFile({
					variables: {
						fileId: selectedFile?.fileId
					}
				})
				refetchListData()
				handleCloseContextMenu()
				setOpen(true)
				setmsg('File Deleted')
			} catch (error) {
				console.error('Error deleting file:', error)
			}
		}
		if (selectedFile?.__typename === 'Folder') {
			console.log(selectedFile?.folderId)
			try {
				await deleteFolder({
					variables: {
						folderId: selectedFile?.folderId
					}
				})
				refetchListData()
				handleCloseContextMenu()
				setOpen(true)
				setmsg('Folder Deleted')
			} catch (error) {
				console.error('Error deleting folder:', error)
				setOpen(true)
				setmsg('Sorry its not  Deleted')
			}
		}
	}

	const handleDownloadFile = async () => {
		try {
			const res = await downloadFile({
				variables: {
					fileId: selectedFile?.fileId
				}
			})
			console.log(res.data.downloadFileSp)
			const url = res.data.downloadFileSp
			window.open(url, '_blank')
			handleCloseContextMenu()
		} catch (error) {
			console.error('Error downloading file:', error)
		}
	}

	useEffect(() => {
		if (!listLoading && !listError && listData) {
			setCurrentFolder(listData?.listFoldersAndFilesSp)
		}
	}, [listData, listLoading, listError])

	return (
		<FolderView
			selectedFile={selectedFile}
			modal={modal}
			createFile={createFile}
			open={open}
			msg={msg}
			setOpen={setOpen}
			setmsg={setmsg}
			isDraggingOver={isDraggingOver}
			fileRef={fileRef}
			contextMenuPosition={contextMenuPosition}
			property={property}
			history={history}
			currentFolder={currentFolder}
			currentPath={currentPath}
			getFileIcon={getFileIcon}
			handleModal={handleModal}
			handleChange={handleChange}
			handleCreate={handleCreate}
			handleDrop={handleDrop}
			handleDragOver={handleDragOver}
			handleClose={handleClose}
			handleFileChange={handleFileChange}
			handleButtonClick={handleButtonClick}
			handleDragLeave={handleDragLeave}
			handleCloseContextMenu={handleCloseContextMenu}
			handleProperties={handleProperties}
			handleHistory={handleHistory}
			handleContextMenu={handleContextMenu}
			handleCloseSubmenu={handleCloseSubmenu}
			goBack={goBack}
			handleBreadcrumbClick={handleBreadcrumbClick}
			openFolder={openFolder}
			renderBreadcrumbs={renderBreadcrumbs}
			handleDeleteFile={handleDeleteFile}
			handleDownloadFile={handleDownloadFile}
			refetchListData={refetchListData}
			onlyFolder={onlyFolder}
		/>
	)
}

export default FolderViewContainer
