import { BlockIcon } from '@wordpress/block-editor';
import './style.css';

export function BlockCard( { block } ) {
	return (
		<div className="bb-route-block__card">
			<div>
				<div className="bb-route-block__row">
					<strong>Name:</strong>
					{ ' ' }
					<code>{ block.name }</code>
				</div>
				<div className="bb-route-block__icon bb-route-block__row">
					<strong>Icon:</strong>
					{ ' ' }
					<BlockIcon icon={ block.icon } />
				</div>
				<div className="bb-route-block__row">
					<strong>Description:</strong>
					{ ' ' }
					{ block.description }
				</div>
				<div className="bb-route-block__row">
					<strong>Category:</strong>
					{ ' ' }
					{ block.category }
				</div>
				{ !! block?.keywords.length && (
					<div className="bb-route-block__row">
						<strong>Keywords:</strong>
						{ ' ' }
						{ block.keywords.join( ', ' ) }
					</div>
				) }
				{ !! Object.keys( block.supports ?? {} ).length && (
					<div className="bb-route-block__supports bb-route-block__row">
						<div>
							<h2>Supports</h2>
						</div>
						<ul className="bb-route-block__supports--list">
							{ Object.entries( block.supports ).map(
								( [ key, support ] ) => (
									<li key={ key }>
										<strong>{ key }</strong>{ ' ' }
										{ `- ${ JSON.stringify( support ) }` }
									</li>
								)
							) }
						</ul>
					</div>
				) }

				{ !! Object.keys( block.styles ?? {} ).length && (
					<div>
						<div className="bb-route-block__styles bb-route-block__row">
							<h2>Styles</h2>
						</div>
						<ul className="bb-route-block__styles--list">
							{ Object.entries( block.styles ).map(
								( [ key, style ] ) => (
									<li key={ key }>
										<strong>{ style.label }</strong>
										{ ! style.isDefault && (
											<>
												{ ': ' }
												<code>
													{ `is-style-${ style.name }` }{ ' ' }
												</code>
											</>
										) }
									</li>
								)
							) }
						</ul>
					</div>
				) }
			</div>
			<div>
				<div>
					<h2>Attributes</h2>
				</div>
				<ul className="bb-route-block__attributes">
					{ Object.entries( block.attributes ).map(
						( [ key, attributeScheme ] ) => (
							<li key={ key }>
								<strong>{ key }</strong>{ ' ' }
								{ attributeScheme.type &&
									`(${ attributeScheme.type })` }
							</li>
						)
					) }
				</ul>
			</div>
		</div>
	);
}
