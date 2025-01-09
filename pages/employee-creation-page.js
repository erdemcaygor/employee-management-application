// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';
import '../components/employee-form';
import { useEmployeeStore, useLanguageStore } from '../stores';
import { Router } from '@vaadin/router';
import { t } from '../utils/i18n';
import { Notification } from '@vaadin/vaadin-notification';

export class EmployeeCreationPage extends LitElement {
  
    static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.languageSubscription = useLanguageStore.subscribe(
      () => this.requestUpdate()
    );
  }

  disconnectedCallback() {
    this.languageSubscription();
  }

  handleEmployeeSubmit(event) {
    const employeeData = event.detail;
    
    // Add new ID to employee data
    const newEmployee = {
      ...employeeData,
      id: Date.now()
    };

    // Add to store
    const addEmployee = useEmployeeStore.getState().addEmployee;
    addEmployee(newEmployee);

    // Show notification
    Notification.show(t('employeeCreatedSuccessfully'), {
        position: 'top-end',
        duration: 4000,
        theme: 'success',
      });

    // Navigate back to employee list
    Router.go('/');
  }

  render() {
    return html`
    <base-page-template header=${t('createNewEmployee')}>
        <employee-form 
            @employee-submit=${this.handleEmployeeSubmit}>
        </employee-form>
    </base-page-template>
    `;
  }
}

customElements.define('employee-creation-page', EmployeeCreationPage);