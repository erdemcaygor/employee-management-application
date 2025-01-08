/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {Router} from '@vaadin/router';
import {baseStyles} from './styles';
import './pages/employee-list-view.js';
import './pages/employee-creation-view.js';
import './pages/employee-detail-view.js';
import './components/custom-header.js';
/**
 * An example element.
 */
export class EmployeeManagementAppInit extends LitElement {

  static styles = [
    baseStyles
  ];

  constructor() {
    super();
  }

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'employee-list-view' },
      { path: '/new-employee', component: 'employee-creation-view' },
      { path: '/employees/:id', component: 'employee-detail-view' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html`
    <div class="main-view">
    <header>
      <custom-header></custom-header>
    </header>
    <main>
        <div id="outlet"></div>
      </main>
    </div>
    `;
  }
}

window.customElements.define('employee-management-app-init', EmployeeManagementAppInit);
