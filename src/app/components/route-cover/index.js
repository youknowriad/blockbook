import { Logo } from '../logo';
import './style.css';
import { getRegisteredBlockTypes, getRegisteredThemes } from '../../api';

export function RouteCover() {
	return (
		<div className="bb-route-cover">
			<div>
				<Logo size="big" />
			</div>
			<p>
				Welcome to Block Book. You have{ ' ' }
				<strong>{ getRegisteredBlockTypes().length }</strong> registered
				blocks, <strong>{ getRegisteredThemes().length }</strong>{ ' ' }
				registered themes.
			</p>
			<p>Start browsing!</p>
		</div>
	);
}
