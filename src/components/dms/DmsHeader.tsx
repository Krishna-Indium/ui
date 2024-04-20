import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React, { ChangeEvent, RefObject, useState } from 'react'

interface HeaderProps {
	handleModal: () => void
	handleButtonClick: () => void
	handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
	fileRef: RefObject<HTMLInputElement> // Ensure fileRef is part of HeaderProps
}

const DmsHeader: React.FC<HeaderProps> = ({
	handleModal,
	handleButtonClick,
	handleFileChange,
	fileRef
}) => {
	const [selectedType, setSelectedType] = useState<number | ''>('')
	const [selectedSortBy, setSelectedSortBy] = useState<number | ''>('')

	const handleTypeChange = (event: SelectChangeEvent<number>) => {
		setSelectedType(event.target.value as number | '')
	}

	const handleSortByChange = (event: SelectChangeEvent<number>) => {
		setSelectedSortBy(event.target.value as number | '')
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div
					style={{
						width: '100vw',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '5%',
						padding: '20px',
						backgroundColor: '#DDDDDD'
					}}
				>
					<h1 style={{ fontWeight: 'bolder', fontSize: '18px' }}>
						Project Documents
					</h1>
					<div
						style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
					>
						<Button
							variant="contained"
							color="secondary"
							size="small"
							onClick={handleModal}
							startIcon={<CreateNewFolderIcon />}
							sx={{
								backgroundColor: '#4caf50',
								color: 'white',
								':hover': {
									backgroundColor: '#3d9b40'
								}
							}}
						>
							Create folder
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="small"
							onClick={handleButtonClick}
							startIcon={<FileUploadIcon />}
							sx={{
								backgroundColor: '#4caf50',
								color: 'white',
								':hover': {
									backgroundColor: '#3d9b40'
								}
							}}
						>
							File upload
						</Button>
						<input
							id="fileInput"
							type="file"
							style={{ display: 'none' }}
							onChange={handleFileChange}
							ref={fileRef}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					marginTop: '2%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}
				>
					<Paper component="form" sx={{ width: '100%' }}>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Search files"
							inputProps={{ 'aria-label': 'search files' }}
						/>
						<IconButton type="button" aria-label="search">
							<SearchIcon />
						</IconButton>
					</Paper>
					<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
						<InputLabel id="type-label">Type</InputLabel>
						<Select
							labelId="type-label"
							id="type-select"
							value={selectedType}
							onChange={handleTypeChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Folder</MenuItem>
							<MenuItem value={20}>Docs</MenuItem>
							<MenuItem value={30}>Images</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}
				>
					<InputLabel style={{ fontWeight: '600', color: '#000000' }}>
						Sort by
					</InputLabel>
					<FormControl sx={{ m: 1, minWidth: 150 }} size="small">
						<InputLabel id="sort-by-label">Sort by</InputLabel>
						<Select
							labelId="sort-by-label"
							id="sort-by-select"
							value={selectedSortBy}
							onChange={handleSortByChange}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>By size ascending</MenuItem>
							<MenuItem value={20}>By size descending</MenuItem>
							<MenuItem value={30}>By name ascending</MenuItem>
							<MenuItem value={40}>By name descending</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</>
	)
}

export default DmsHeader
