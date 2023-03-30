import { render } from '@/lib/utils/tests';
import Header from '../Header';

describe('Header', () => {
    it('should display a title', () => {
        const header = render(<Header />);

        expect(header.getByText('header.title')).toBeInTheDocument();
    });
});
