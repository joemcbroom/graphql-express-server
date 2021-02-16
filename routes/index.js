import express from 'express';
const router = express.Router();
import schema from '../schema/schema.js';

import expressGraphql from 'express-graphql';

const graphqlHTTP = expressGraphql.graphqlHTTP;

router.get('/', (req, res) => {
	res.send('hi');
});

router.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

export default router;
