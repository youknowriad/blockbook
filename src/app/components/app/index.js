import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteCover } from '../route-cover';
import { RouteBlock } from '../route-block';
import { RouteTheme } from '../route-theme';
import { Menu } from '../menu';
import { Logo } from '../logo';
import './style.css';

export function App() {
	return (
		<Router basename={ window.webpackPublicPath }>
			<div className="bb-app">
				<div className="bb-app__sidebar">
					<Logo />
					<Menu />
				</div>
				<div className="bb-app__main">
					<Route path="/block/:slug">
						<RouteBlock />
					</Route>

					<Route path="/theme/:slug">
						<RouteTheme />
					</Route>

					<Route exact path="/">
						<RouteCover />
					</Route>
				</div>
			</div>
		</Router>
	);
}
