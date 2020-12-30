import React from 'react';
import { Link } from 'react-router-dom';
import CountrySelectForm from '../form/CountrySelectForm';

const Header = () => {
	return (
		<nav className='header bg-light py-2'>
			<div className='container'>
				<div className='row align-items-center justify-content-between'>
					<div className='col-md-4'>
						<h1 className='logo text-left mb-0'>
							<Link to='/'>
								<span className='primary-text'>
									<i className='fas fa-virus'></i> Corona
								</span>
								<span className='text-color'>Dot</span>
							</Link>
						</h1>
					</div>
					<div className='col-md-4 text-right'>
						<Link to='/countries' className='btn btn-dark btn-sm'>
							Switch
						</Link>
					</div>
					<div className='col-md-4 d-none'>
						<CountrySelectForm />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
