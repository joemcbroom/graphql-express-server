import graphql from 'graphql';
const { GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
import { getPerson, getCompany, getPeople } from '../controllers/mockPeople.js';

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
	description: 'Root query',
	fields: () => ({
		person: {
			type: PersonType,
			args: { id: { type: GraphQLString } },
			async resolve(parent, args) {
				let id = args.id;
				let person = await getPerson(id);
				return person;
			},
		},
		people: {
			type: new GraphQLList(PersonType),
			resolve: async () => await getPeople(),
		},
	}),
});

export default new GraphQLSchema({
	query: RootQuery,
});

// export default query;
