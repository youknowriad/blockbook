import { useState } from '@wordpress/element';
import {
	BlockEditorProvider,
	BlockList,
	BlockEditorKeyboardShortcuts,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import {
	SlotFillProvider,
	DropZoneProvider,
	Popover,
} from '@wordpress/components';

export function Editor( { initialBlocks } ) {
	const [ blocks, setBlocks ] = useState( initialBlocks );
	return (
		<div className="editor-styles-wrapper">
			<SlotFillProvider>
				<DropZoneProvider>
					<BlockEditorProvider
						value={ blocks }
						onChange={ setBlocks }
						onInput={ setBlocks }
						settings={ {
							templateLock: 'all',
						} }
					>
						<Popover.Slot name="block-toolbar" />
						<BlockEditorKeyboardShortcuts />
						<WritingFlow>
							<ObserveTyping>
								<BlockList />
							</ObserveTyping>
						</WritingFlow>
					</BlockEditorProvider>
				</DropZoneProvider>
				<Popover.Slot />
			</SlotFillProvider>
		</div>
	);
}
