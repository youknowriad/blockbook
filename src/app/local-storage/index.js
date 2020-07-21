import { createLocalStorageStateHook } from 'use-local-storage-state';

export const useTheme = createLocalStorageStateHook( 'theme', 'default' );
