import { render } from '@/lib/utils/tests';
import { describe } from 'vitest';
import Home from '../Home';

describe('Home', () => {
    it('should render the home page', () => {
        const screen = render(<Home />);

        expect(screen.getByText('home.title')).toBeVisible();
        expect(screen.getByText('home.subtitle')).toBeVisible();
        expect(screen.getByText('home.button-count')).toBeVisible();
    });

    it('should have a counter button', () => {
        const screen = render(<Home />);

        expect(screen.getByText('home.title')).toBeVisible();
        expect(screen.getByText('home.subtitle')).toBeVisible();
        expect(screen.getByText('home.button-count')).toBeVisible();
    });
});
