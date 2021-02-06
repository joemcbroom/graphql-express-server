import graphql from 'graphql-request';
const { request, gql } = graphql;
/**
 *
 *
 *
 *
 *
 *
 */
export const querySpaceX = async (req, res, next) => {
	const query = gql`
		{
			launches(limit: 10) {
				rocket {
					rocket_name
					rocket_type
				}
				details
				launch_date_unix
			}
		}
	`;
	try {
		let data = await request('https://api.spacex.land/graphql', query);
		res.json(data);
	} catch (err) {
		res.json(err);
	}
};
