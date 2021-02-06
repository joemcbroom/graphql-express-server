import fetch from 'node-fetch';

const API_URL = 'https://6019d3957db5390017834937.mockapi.io';

export const getPerson = async (id) => {
	try {
		let res = await fetch(API_URL + '/people/' + id);
		let json = await res.json();
		return json;
	} catch (error) {
		throw new Error(error.message);
	}
};
export const getCompany = async (id) => {
	try {
		let res = await fetch(API_URL + '/company/' + id);
		let json = await res.json();
		return json;
	} catch (error) {
		throw new Error(error.message);
	}
};
