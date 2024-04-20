/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box } from '@mui/material'
import React, {
	JSXElementConstructor,
	ReactElement,
	useMemo,
	useState
} from 'react'
import { atomOneDark, CopyBlock } from 'react-code-blocks'
import * as colors from '../constants/colors'
import * as sizing from '../constants/sizing'

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2
}

interface IconHelperModalProps {
	icon: ReactElement<SVGElement, string | JSXElementConstructor<SVGElement>>
	name: string
}

const IconHelperModal: React.FC<IconHelperModalProps> = ({
	icon: Component,
	name
}) => {
	const [fillColor, setFillColor] = useState<string>('#000000')
	const [size, setSize] = useState<string>(sizing.ICON_MEDIUM)
	const [sizeName, setSizeName] = useState<string>('ICON_MEDIUM')

	const codeStr = useMemo(() => {
		return `

<${name} stroke="#eeeeee" fill="${fillColor}" width={${sizeName}} height={${sizeName}} />

`
	}, [fillColor, sizeName])

	console.log(Component)
	return (
		<>
			<Box sx={style}>
				<div className="flex-col">
					<div className="flex mb-5">
						<div className="w-full">
							<h2>Color</h2>
							<select
								onChange={({ target: { value } }) => setFillColor(value)}
								value={fillColor}
								className=" border h-fit p-2"
							>
								{Object.keys(colors).map((color) => {
									return (
										<option key={color} value={colors[color]}>
											{color}
										</option>
									)
								})}
							</select>
							<h2>Size</h2>
							<select
								onChange={({ target: { value } }) => {
									setSizeName(value)
									setSize(sizing[value])
								}}
								value={sizeName}
								className=" border h-fit p-2"
							>
								{Object.keys(sizing).map((key) => {
									return (
										<option key={key} value={key}>
											{key}
										</option>
									)
								})}
							</select>
						</div>
						{/* 
// @ts-ignore */}
						<Component
							fill={fillColor}
							strokeWidth="0.2"
							width={size}
							height={size}
						/>
					</div>

					<CopyBlock
						text={codeStr}
						language={'javascript'}
						theme={atomOneDark}
						showLineNumbers={false}
					/>
				</div>
			</Box>
		</>
	)
}

export default IconHelperModal
