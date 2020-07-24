import { useViewportMatch } from '@wordpress/compose';
import { Menu } from '../menu';
import { Logo } from '../logo';

export function Sidebar() {
    return (
        <>
            <Logo />
            <Menu />
        </>
    );
}