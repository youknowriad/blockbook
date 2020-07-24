import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { Menu } from '../menu';
import { Logo } from '../logo';
import './style.css';

export function MobileMenu() {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<div
			className={ classnames( 'bb-mobile-menu', {
				'is-opened': isVisible,
			} ) }
		>
			<div className="bb-mobile-menu__toggle">
				<Button onClick={ () => setIsVisible( ! isVisible ) }>
					<Logo />
				</Button>
			</div>

			{ isVisible && (
				<div className="bb-mobile-menu__content">
					<Menu onSelect={ () => setIsVisible( false ) } />
				</div>
			) }
		</div>
	);
}
