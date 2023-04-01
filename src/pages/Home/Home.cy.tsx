import i18n from '@/lib/setup/i18n';
import Home from './Home';

describe('<Home />', () => {
    beforeEach(() => {
        cy.mount(<Home />);
    });

    it('shows a title', () => {
        cy.get('body').should('contain.text', i18n.t('home.title'));
    });

    it('has a counter button', () => {
        const button = cy.get('bds-button');

        button.should(
            'contain.text',
            i18n.t('home.button-count', { count: 0 })
        );
        button
            .click()
            .should('contain.text', i18n.t('home.button-count', { count: 1 }));
        button
            .click()
            .should('contain.text', i18n.t('home.button-count', { count: 2 }));
    });

    it('has a link to the blip-ds documentation', () => {
        cy.get('a')
            .should('have.attr', 'href')
            .and('include', 'takenet.github.io/blip-ds');
    });

    it('has a logo', () => {
        cy.get('img').should('have.attr', 'alt').and('include', 'blip logo');
    });
});
