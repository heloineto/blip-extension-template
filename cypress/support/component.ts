import '@/index.css';
import '@/lib/setup/blip-ds';
import '@/lib/setup/fonts';
import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
import '../../src/@types/cypress.d.ts';
import './commands';
import './i18n';

Cypress.Commands.add('mount', mount);
