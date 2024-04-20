import { Modal } from '@mui/material'
import { useMemo, useState } from 'react'
import * as Icons from '../icons'
import IconHelperModal from './IconHelperModal'
import styles from './iconsView.module.scss'

const IconsView = () => {
	const AllIcons = useMemo(() => {
		return Object.keys(Icons).map((key: string) => {
			return {
				Component: Icons[key],
				name: key
			}
		})
	}, [])

	const [currentIcon, setCurrentIcon] = useState<string | null>()

	const [searchQuery, setSearchQuery] = useState<string>('')

	const handleSearchInputChange = ({ target: { value } }) => {
		setSearchQuery(value)
	}

	const openIcon = (icon: string) => {
		setCurrentIcon(icon)
	}

	const handleClose = () => {
		setCurrentIcon(null)
	}

	return (
		<div className={styles['container']}>
			<span className={styles['heading']}>Icons</span>
			<input
				onChange={handleSearchInputChange}
				placeholder="Search for icons"
				className={styles['search-input']}
			/>
			<div className={styles['icons']}>
				{AllIcons.filter((icon) => {
					if (searchQuery.length > 0) {
						return icon.name.toLowerCase().includes(searchQuery.toLowerCase())
					} else {
						return true
					}
				}).map(({ Component, name }, index) => {
					return (
						<div
							aria-hidden="true"
							key={index}
							className={`${styles['icon-wrapper']} cursor-pointer`}
							onClick={() => {
								openIcon(name)
							}}
						>
							<Component strokeWidth="0.2" width="3rem" height="3rem" />
							<button className={styles['copy-to-clipboard']}>{name}</button>
						</div>
					)
				})}
			</div>
			<Modal
				open={Boolean(currentIcon)}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				{currentIcon ? (
					<IconHelperModal name={currentIcon} icon={Icons[currentIcon]} />
				) : (
					<></>
				)}
			</Modal>
		</div>
	)
}
export default IconsView
