import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const router = createMemoryRouter(
    [
        {
            path: '/',
            element: <>element</>,
            errorElement: <ErrorPage />,
        },
    ],
    { initialEntries: ['/non-existent-route'] }
);

describe('<ErrorPage />', () => {
    beforeEach(() => {
        cy.mount(<RouterProvider router={router} />);
    });

    it('shows 404 error if the route does not exist', () => {
        cy.get('.text-9xl').should('have.text', '404');
        cy.get('.text-xl').should('have.text', 'Not Found');
    });
});
