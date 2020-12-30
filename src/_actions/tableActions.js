import axios from 'axios';
import {
	GET_COUNTRIES_CASES,
	SET_COUNTRIES_CASES_LOADING,
	COUNTRIES_ERROR
} from './types';

// export const getGlobalCase = () => async dispatch => {
// 	dispatch({ type: SET_COUNTRIES_CASES_LOADING });

// 	try {
// 		const res = await axios.get(
// 			'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=true'
// 		);

// 		console.log(res.data);
// 	} catch (err) {
// 		console.error(err.message);
// 		dispatch({
// 			type: COUNTRIES_ERROR,
// 			payload: err.message
// 		});
// 	}
// };

export const getCountriesCases = () => async dispatch => {
	dispatch({ type: SET_COUNTRIES_CASES_LOADING });

	try {
		const globalRes = await axios.get(
			'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=true'
		);

		const countriesRes = await axios.get(
			'https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true'
		);

		// console.log([globalRes.data, ...countriesRes.data]);

		dispatch({
			type: GET_COUNTRIES_CASES,
			payload: [globalRes.data, ...countriesRes.data]
		});
	} catch (err) {
		console.error(err.message);
		dispatch({
			type: COUNTRIES_ERROR,
			payload: err.message
		});
	}
};
