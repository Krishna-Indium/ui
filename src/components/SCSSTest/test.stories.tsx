import type { Meta, StoryObj } from '@storybook/react'
import Test from '.'

const meta: Meta<typeof Test> = {
	component: Test,
	title: 'Example/A demo story showing how to use SCSS modules in a component'
}

export default meta
type Story = StoryObj<typeof Test>

export const Basic: Story = {
	args: {}
}
