import {
	GET_COUNTRIES_CASES,
	SET_COUNTRIES_CASES_LOADING,
	COUNTRIES_ERROR
} from '../_actions/types';

const initialState = {
	countries: [],
	loading: false,
	error: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES_CASES:
			return {
				...state,
				countries: payload,
				loading: false
			};
		case SET_COUNTRIES_CASES_LOADING:
			return {
				...state,
				loading: true
			};
		case COUNTRIES_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
};
