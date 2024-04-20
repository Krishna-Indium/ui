import { gql } from '@apollo/client'

export const LIST_FOLDER_FILES = gql`
	query ExampleQuery($utility: String!) {
		listFoldersAndFilesSp(utility: $utility) {
			files {
				fileId
				fileName
				size
				type
				uploadTime
				uploadedBy
			}
			folders {
				folderId
				folderName
				folderPath
				parentFolderId
			}
		}
	}
`

export const CREATE_FOLDER = gql`
	mutation CreateFolderSp($folderName: String!, $utility: String!) {
		createFolderSp(folderName: $folderName, utility: $utility) {
			createdTime
			folderName
			id
			spFolderPath
			utility
		}
	}
`

export const UPLOAD_FILE = gql`
	mutation UploadFile($file: Upload!, $utility: String!) {
		uploadFileSp(file: $file, utility: $utility) {
			fileName
			folderId
			id
			logs
			size
			state
			type
			uploadTime
			uploadedBy
		}
	}
`

export const DELETE_FILE = gql`
	mutation DeleteFile($fileId: String!) {
		deleteFileSp(fileId: $fileId) {
			Message
			deleteTime
			deletedBy
			fileId
			fileName
		}
	}
`

export const DOWNLOAD_FILE = gql`
	mutation DownloadFileSp($fileId: String!) {
		downloadFileSp(fileId: $fileId)
	}
`

export const DELETE_FOLDER = gql`
	mutation DmsMutation($folderId: String!) {
		deleteFolderSp(folderId: $folderId) {
			deleteTime
			filesDeleted
			folderId
			foldersDeleted
			message
		}
	}
`

export const RENAME_FILE = gql`
	mutation DmsMutation($fileId: String!, $newFileName: String!) {
		renameDocumentSp(fileId: $fileId, newFileName: $newFileName) {
			fileName
			folderId
			id
			logs
			size
			state
			type
			uploadTime
			uploadedBy
		}
	}
`
export const OPEN_SUB_FOLDER = gql`
	query ListFoldersAndFilesSp($utility: String!, $folderId: String) {
		listFoldersAndFilesSp(utility: $utility, folderId: $folderId) {
			error
			folders {
				folderId
				folderName
				folderPath
				parentFolderId
			}
			files {
				fileId
				fileName
				size
				type
				uploadTime
				uploadedBy
			}
		}
	}
`
