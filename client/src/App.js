import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Saved from './pages/Saved';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import store from './js/store';

const App = () =>
	<Provider store={store}>
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/saved" component={Saved} />
				</Switch>
				<Footer />
			</div>
		</Router>
	</Provider>;

export default App;
