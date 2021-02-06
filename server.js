import express from 'express';
import routes from './routes/index.js';

import expressGraphql from 'express-graphql';

const graphqlHTTP = expressGraphql.graphqlHTTP;

import schema from './schema/schema.js';

const app = express();

const allowedOrigins = ['http://localhost:8080', 'http://joemcbroom.dev', 'https://joemcbroom.dev'];
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg =
					'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	})
);

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen({ port: 4000 }, () => console.log('Now browse to http://localhost:4000'));
