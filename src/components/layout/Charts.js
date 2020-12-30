import React, { Fragment } from 'react';
import Spinner from './Spinner';
import { Line, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chart = ({
	chart: { infected, recovered, deaths, barChart, loading }
}) => {
	if (loading || (infected === null && barChart === null)) {
		return <Spinner />;
	}

	return (
		<div className='chart py-4'>
			<div className='container'>
				{/* <h4 className='text-center'>Covid History for the Past 2 months</h4> */}
				{infected !== null &&
				recovered !== null &&
				deaths !== null &&
				barChart === null ? (
					<Fragment>
						<div className='row'>
							<div className='col-md-6 mb-5'>
								<Line
									data={infected}
									height={200}
									options={{
										maintainAspectRatio: true,
										title: {
											display: true,
											text:
												'Infection History for the Past Three Months'
										},
										legend: {
											display: false
										}
									}}
								/>
							</div>
							<div className='col-md-6 mb-5'>
								<Line
									data={recovered}
									height={200}
									options={{
										maintainAspectRatio: true,
										title: {
											display: true,
											text:
												'Recovery History for the Past Three Months'
										},
										legend: {
											display: false
										}
									}}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-6 offset-md-3 mb-5'>
								<Line
									data={deaths}
									height={200}
									options={{
										maintainAspectRatio: true,
										title: {
											display: true,
											text:
												'Deaths History for the Past Three Months'
										},
										legend: {
											display: false
										}
									}}
								/>
							</div>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<Bar
							data={barChart}
							options={{
								maintainAspectRatio: true,
								legend: { display: false }
							}}
						/>
					</Fragment>
				)}
			</div>
		</div>
	);
};

Chart.propTypes = {
	chart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	chart: state.chart
});

export default connect(mapStateToProps)(Chart);
