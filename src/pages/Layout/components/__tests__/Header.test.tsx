import { render } from '@/lib/utils/tests';
import Header from '../Header';

describe('Header', () => {
    it('should display a title', () => {
        const { getByText } = render(<Header />);

        expect(getByText('header.title')).toBeInTheDocument();
    });
});
