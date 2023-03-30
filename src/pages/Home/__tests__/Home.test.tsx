import { render } from '@/lib/utils/tests';
import { describe } from 'vitest';
import Home from '../Home';

describe('Home', () => {
    it('should render the home page', () => {
        const { getByText } = render(<Home />);

        expect(getByText('home.title')).toBeInTheDocument();
        expect(getByText('home.subtitle')).toBeInTheDocument();
        expect(getByText('home.button-count')).toBeInTheDocument();
    });

    it('should have an logo that is a link', () => {
        const { getByRole } = render(<Home />);

        const link = getByRole('link');
        expect(link).toBeInTheDocument();

        const logo = getByRole('img', { name: /blip logo/i });
        expect(logo).toBeInTheDocument();
    });
});
