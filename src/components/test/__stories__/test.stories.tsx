import { worker } from '@src/mocks/browser'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { waitFor, within } from '@storybook/test'
import { http, HttpResponse } from 'msw'
import Test from '../index'

export default {
	title: 'Example/MSW based api mocking',
	component: Test,
	parameters: { options: { showPanel: false } }
} as Meta<typeof Test>

type Story = StoryObj<typeof Test>

interface APIRequestHandlerI {
	params: Record<string, string | readonly string[]>
	request: Request
}

export const Default: Story = {
	args: {},
	decorators: [
		(Story) => {
			worker.use(
				http.get(
					'https://api.github.com/users/:username',
					({ params: _params, request: _req }: APIRequestHandlerI) => {
						// Mock an infinite loading state.
						return HttpResponse.json({ a: 'value' })
					}
				)
			)
			return <Story />
		}
	],
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement)

		await waitFor(() => expect(canvas.getByText('value')).toBeInTheDocument())
	}
}
