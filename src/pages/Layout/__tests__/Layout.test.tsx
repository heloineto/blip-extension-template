import { render } from '@/lib/utils/tests';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <>layout children</>
            }
        ]
    }
]);

describe('Layout', () => {
    it('should render the children route', () => {
        const result = render(<RouterProvider router={router} />);

        expect(result.getByText(/layout children/i)).toBeInTheDocument();
    });
});
