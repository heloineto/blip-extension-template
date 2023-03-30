import '@/index.css';
import '@/lib/setup/blip-ds';
import '@/lib/setup/fonts';
import { mount } from 'cypress/react18';
import '../../src/@types/cypress.d.ts';
import './commands';

Cypress.Commands.add('mount', mount);
