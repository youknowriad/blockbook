import './style.css';

export function Logo( { size } ) {
	return (
		<div className={ `bb-logo ${ size ? ' is-size-' + size : '' }` }>
			<span>BB</span>
			BlockBook
		</div>
	);
}
