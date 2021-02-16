import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

import expressGraphql from 'express-graphql';

const graphqlHTTP = expressGraphql.graphqlHTTP;

const app = express();

app.use(cors());

app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen({ port: PORT }, () => console.log('Now listening on port: ' + PORT));
