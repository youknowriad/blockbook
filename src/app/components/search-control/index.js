import classnames from 'classnames';
import { useInstanceId } from '@wordpress/compose';
import { VisuallyHidden, Button } from '@wordpress/components';
import { Icon, search, closeSmall } from '@wordpress/icons';
import { useRef } from '@wordpress/element';
import './style.css';

export function SearchControl( { label, className, onChange, value } ) {
	const instanceId = useInstanceId( SearchControl );
	const searchInput = useRef();

	return (
		<div className={ classnames( 'bb-search-control', className ) }>
			<VisuallyHidden
				as="label"
				htmlFor={ `search-control-${ instanceId }` }
			>
				{ label }
			</VisuallyHidden>
			<input
				ref={ searchInput }
				className="bb-search-control__input"
				id={ `search-control-${ instanceId }` }
				type="search"
				placeholder={ label }
				onChange={ ( event ) => onChange( event.target.value ) }
				autoComplete="off"
				value={ value || '' }
			/>
			<div className="bb-search-control__icon">
				{ !! value && (
					<Button
						icon={ closeSmall }
						label="Reset Search"
						onClick={ () => {
							onChange( '' );
							searchInput.current.focus();
						} }
					/>
				) }
				{ ! value && <Icon icon={ search } /> }
			</div>
		</div>
	);
}
