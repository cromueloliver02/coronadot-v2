import React, { Fragment } from 'react';
import CountryInfo from '../layout/CountryInfo';
import Results from '../results/ResultCards';
import Chart from '../layout/Charts';

const Home = () => {
	return (
		<Fragment>
			<CountryInfo />
			<Results />
			<Chart />
		</Fragment>
	);
};

export default Home;
