const registeredBlocks = [];

export function registerBlock( blockName ) {
	registeredBlocks.push( blockName );
}

export function getRegisteredBlocks() {
	return registeredBlocks;
}
