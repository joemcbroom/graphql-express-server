import graphql from 'graphql';
const { GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLID } = graphql;
import { getPerson, getCompany } from '../controllers/mockPeople.js';

const PersonType = new GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		avatar: { type: GraphQLString },
		company: {
			type: CompanyType,
			async resolve(parent, args) {
				let company = await getCompany(parent.companyId);
				return company;
			},
		},
	}),
});

const CompanyType = new GraphQLObjectType({
	name: 'Company',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		address: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		person: {
			type: PersonType,
			args: { id: { type: GraphQLString } },
			async resolve(parent, args) {
				let id = args.id;
				let person = await getPerson(id);
				return person;
			},
		},
	},
});

const query = new GraphQLSchema({
	query: RootQuery,
});
export default query;
