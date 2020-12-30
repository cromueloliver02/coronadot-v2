import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CountryItem = ({ rank, countryItem }) => {
	const {
		country,
		cases,
		todayCases,
		recovered,
		todayRecovered,
		deaths,
		todayDeaths,
		active,
		critical,
		tests
	} = countryItem;

	return (
		<tr>
			<th scope='row'>{rank}</th>

			<td className='table-country-name'>{country ? country : 'Global'}</td>
			<td>{cases}</td>
			<td className={`${todayCases && 'bg-infected-today'}`}>
				{todayCases && <Fragment>+{todayCases}</Fragment>}
			</td>
			<td>{recovered}</td>
			<td className={`${todayRecovered && 'bg-recovered-today'}`}>
				{todayRecovered && <Fragment>+{todayRecovered}</Fragment>}
			</td>
			<td>{deaths}</td>
			<td className={`${todayDeaths && 'bg-deaths-today'}`}>
				{todayDeaths && <Fragment>+{todayDeaths}</Fragment>}
			</td>
			<td>{active}</td>
			<td>{critical}</td>
			<td>{tests}</td>
			<td>
				<a href='#' className='btn btn-dark btn-sm'>
					View
				</a>
			</td>
		</tr>
	);
};

CountryItem.propTypes = {
	countryItem: PropTypes.object.isRequired
};

export default CountryItem;
