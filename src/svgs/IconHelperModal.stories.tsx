import { Meta, StoryObj } from '@storybook/react'
import * as Icons from '../icons'
import IconHelperModal from './IconHelperModal'

const meta: Meta<typeof IconHelperModal> = {
	title: 'Components/IconHelperModal',
	component: (args) => <IconHelperModal {...args} />
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		// @ts-ignore
		icon: Icons.Icons8Bookmark,
		name: 'Icons8Bookmark'
	}
}
