import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountriesCases } from '../../_actions/tableActions';
import Countries from '../table/Countries';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Table = ({ table: { countries, loading }, getCountriesCases }) => {
	useEffect(() => {
		getCountriesCases();
		// eslint-disable-next-line
	}, []);

	if (loading || countries.length === 0) {
		return <Spinner />;
	}

	return (
		<div className='container-fluid py-5'>
			<table className='table table-striped table-hover table-borderless'>
				<thead className='thead-light'>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Country</th>
						<th scope='col'>Total Infected</th>
						<th scope='col'>Infected Today</th>
						<th scope='col'>Total Recovered</th>
						<th scope='col'>Recovered Today</th>
						<th scope='col'>Total Deaths</th>
						<th scope='col'>Deaths Today</th>
						<th scope='col'>Active</th>
						<th scope='col'>Critical</th>
						<th scope='col'>Tests</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					<Countries countries={countries} />
				</tbody>
			</table>
		</div>
	);
};

Table.propTypes = {
	getCountriesCases: PropTypes.func.isRequired,
	table: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	table: state.table
});

export default connect(mapStateToProps, { getCountriesCases })(Table);
