import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
// redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/countries' component={Table} />
					</Switch>
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
