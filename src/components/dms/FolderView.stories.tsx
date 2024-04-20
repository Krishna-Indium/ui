/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, StoryObj } from '@storybook/react'
import FolderView from './FolderView'

const meta: Meta<typeof FolderView> = {
	title: 'DMS/folderView',
	component: FolderView
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		modal: false,
		createFile: '',
		open: false,
		msg: '',
		isDraggingOver: false,
		fileRef: { current: null },
		contextMenuPosition: null,
		property: false,
		history: false,
		selectedFile: null,
		currentFolder: {
			folderId: '0',
			folderName: 'root',
			type: 'Folder',
			folders: [],
			fileId: '',
			uploadedBy: 'John, March 13 @00:00',
			size: '2 MB',
			uploadTime: 'John, March 13 @00:00',
			__typename: 'Folder',
			fileName: '',
			files: [
				{
					folderId: '1',
					folderName: 'Project',
					type: 'Folder',
					size: '2 MB',
					uploadedBy: 'John, March 13 @00:00',
					__typename: 'Folder',
					folders: [],
					uploadTime: 'John, March 13 @00:00',
					fileName: '',
					fileId: '',
					files: [
						{
							fileId: '2',
							fileName: 'sample.pdf',
							type: 'Document',
							size: '2 MB',
							uploadTime: 'John, March 13 @00:00',
							files: [],
							folders: [],
							__typename: 'File',
							folderId: '',
							folderName: '',
							uploadedBy: 'User 1'
						}
					]
				}
			]
		},
		currentPath: ['My Files'],
		getFileIcon: () => null,
		handleModal: () => {},
		handleChange: () => {},
		handleCreate: () => {},
		handleDrop: () => {},
		handleDragOver: () => {},
		handleClose: () => {},
		handleFileChange: () => {},
		handleButtonClick: () => {},
		handleDragLeave: () => {},
		handleCloseContextMenu: () => {},
		handleProperties: () => {},
		handleHistory: () => {},
		handleContextMenu: () => {},
		handleCloseSubmenu: () => {},
		goBack: () => {},
		handleBreadcrumbClick: () => {},
		openFolder: () => {},
		renderBreadcrumbs: () => null
	}
}
