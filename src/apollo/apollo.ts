import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
	uri: 'http://ecs-services-204813822.us-east-1.elb.amazonaws.com/gql/dms'
})

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})

export default client
