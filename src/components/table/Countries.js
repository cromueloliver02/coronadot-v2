import React from 'react';
import CountryItem from './CountryItem';
import PropTypes from 'prop-types';

const Countries = ({ countries }) =>
	countries.map((countryItem, idx) => (
		<CountryItem
			key={idx}
			rank={idx === 0 ? '' : idx}
			countryItem={countryItem}
		/>
	));

Countries.propTypes = {
	countries: PropTypes.array.isRequired
};

export default Countries;
