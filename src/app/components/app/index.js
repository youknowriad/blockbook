import { useViewportMatch } from '@wordpress/compose';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteCover } from '../route-cover';
import { RouteBlock } from '../route-block';
import { RouteTheme } from '../route-theme';
import { Sidebar } from '../sidebar';
import { MobileMenu } from '../mobile-menu';
import './style.css';

export function App() {
	const isMobile = useViewportMatch( 'medium', '<' );
	
	return (
		<Router basename={ window.webpackPublicPath }>
			<div className="bb-app">
				{ isMobile && <MobileMenu /> }
				<div className="bb-app__sidebar">
					<Sidebar />
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
