import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/rooms" component={Rooms} />
						<Route exact path="/rooms/:slug" component={SingleRoom} />
						<Route component={Error} />
					</Switch>
				</Router>
			</Fragment>
		);
	}
}

export default App;
