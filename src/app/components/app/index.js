import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteCover } from '../route-cover';
import { RouteBlock } from '../route-block';
import { Menu } from '../menu';
import { Logo } from '../logo';

import './style.css';

export function App() {
	return (
		<Router>
			<div className="bb-app">
				<div className="bb-app__sidebar">
					<Logo />
					<Menu />
				</div>
				<div className="bb-app__main">
					<Route path="/block/:slug">
						<RouteBlock />
					</Route>

					<Route exact path="/">
						<RouteCover />
					</Route>
				</div>
			</div>
		</Router>
	);
}
