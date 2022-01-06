import { useMemo, useState } from '@wordpress/element';
import {
	BlockEditorProvider,
	BlockList,
	BlockEditorKeyboardShortcuts,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import { SlotFillProvider, Popover } from '@wordpress/components';
import { getRegisteredThemes } from '../../api';
import { useTheme } from '../../local-storage';

export function Editor( { initialBlocks } ) {
	const [ blocks, setBlocks ] = useState( initialBlocks );
	const [ currentThemeName ] = useTheme();
	const currentTheme =
		getRegisteredThemes().find(
			( theme ) => theme.name === currentThemeName
		) || getRegisteredThemes()[ 0 ];
	const themeStyles = useMemo(
		() =>
			currentTheme.editorStyles.replaceAll(
				/(?<!-)\bbody\b(?!-)/gi,
				'.editor-styles-wrapper'
			),
		[ currentTheme ]
	);

	return (
		<>
			<style>{ themeStyles }</style>
			<div className="editor-styles-wrapper">
				<SlotFillProvider>
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
					<Popover.Slot />
				</SlotFillProvider>
			</div>
		</>
	);
}
