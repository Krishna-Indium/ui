import { ApolloProvider } from '@apollo/client'
import client from '@src/apollo/apollo'
import { Meta, StoryObj } from '@storybook/react'
import FolderViewContainer from './FolderViewContainer'

const meta: Meta<typeof FolderViewContainer> = {
	title: 'DMS/FolderViewContainer',
	component: FolderViewContainer
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = (args) => (
	<ApolloProvider client={client}>
		<FolderViewContainer {...args} />
	</ApolloProvider>
)

Primary.args = {
	rootDir: 'rootPath'
}
