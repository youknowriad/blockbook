import { SelectControl } from '@wordpress/components';
import { getRegisteredThemes } from '../../api';
import { useTheme } from '../../local-storage';

export function ThemeSwitcher() {
	const [ currentThemeName, setCurrentThemeName ] = useTheme();

	return (
		<SelectControl
			label="Theme"
			value={ currentThemeName }
			options={ getRegisteredThemes().map( ( theme ) => ( {
				value: theme.name,
				label: theme.title,
			} ) ) }
			onChange={ ( selectedItem ) => {
				setCurrentThemeName( selectedItem );
			} }
		/>
	);
}
