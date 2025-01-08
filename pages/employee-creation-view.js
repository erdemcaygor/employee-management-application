// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';
import '../components/employee-form';
import { useEmployeeStore } from '../stores/employee-store';
import { Router } from '@vaadin/router';

export class EmployeeCreationView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  handleEmployeeSubmit(event) {
    const employeeData = event.detail;
    
    // Add new ID to employee data
    const newEmployee = {
      ...employeeData,
      id: Date.now()
    };

    // Add to store
    const addEmployee = useEmployeeStore.getState().addEmployee;
    console.log(newEmployee);
    addEmployee(newEmployee);

    // Navigate back to employee list
    Router.go('/');
  }

  render() {
    return html`
    <base-page-template header="Create New Employee">
        <employee-form 
            @employee-submit=${this.handleEmployeeSubmit}>
        </employee-form>
    </base-page-template>
    `;
  }
}

customElements.define('employee-creation-view', EmployeeCreationView);