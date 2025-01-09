// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { Notification } from '@vaadin/notification';
import { useEmployeeStore, useLanguageStore } from '../stores';
import { t } from '../utils/i18n';

export class EmployeeDetailPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .error-message {
        color: var(--themeColor);
        padding: 1rem;
        text-align: center;
      }
    `
  ];

  static get properties() {
    return {
      employee: { type: Object }
    };
  }

  constructor() {
    super();
    this.languageSubscription = useLanguageStore.subscribe(
      () => this.requestUpdate()
    );
  }

  disconnectedCallback() {
    this.languageSubscription();
  }

  onBeforeEnter(location) {
    this.employeeID = location.params.id;
    // get employee from store
    this.employee = useEmployeeStore.getState()?.employees?.find(employee => employee.id.toString() === this.employeeID);
  }

  handleEmployeeSubmit(event) {
    const employeeData = event.detail;
    const updateEmployee = useEmployeeStore.getState().updateEmployee;

    // Update employee in store
    updateEmployee(employeeData.id, employeeData);

    // Show notification
    Notification.show(t('employeeUpdatedSuccessfully'), {
        position: 'top-end',
        duration: 4000,
        theme: 'success',
    });

    // Navigate back to employee list
    Router.go('/');
  }

  render() {
    return html`
        <base-page-template header="Employee Details">
            ${this.employee 
              ? html`<employee-form .employee=${this.employee} ?isUpdateForm=${true} @employee-submit=${this.handleEmployeeSubmit}></employee-form>`
              : html`<div class="error-message">Employee not found</div>`
            }
        </base-page-template>
    `;
  }
}
customElements.define('employee-detail-page', EmployeeDetailPage);