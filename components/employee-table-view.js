// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import { tableStyles } from '../styles';
import { useEmployeeStore } from '../stores/employee-store';

export class EmployeeTableView extends LitElement {
  constructor() {
    super();
    // Initial subscription
    this.unsubscribe = useEmployeeStore.subscribe(
      state => {
        this.employees = state.employees;
        this.requestUpdate();
      }
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Cleanup subscription
    this.unsubscribe();
  }

  static get properties() {
    return {
      employees: { type: Array }
    };
  }

  static styles = [tableStyles];

  handleDelete(id) {
    useEmployeeStore.getState().deleteEmployee(id);
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Employment</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(employee => html`
            <tr>
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.dateOfEmployment}</td>
              <td>${employee.dateOfBirth}</td>
              <td>${employee.phone}</td>
              <td>${employee.email}</td>
              <td>${employee.department}</td>
              <td>${employee.position}</td>
              <td>
                <button>Edit</button>
                <button @click=${() => this.handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}

customElements.define('employee-table-view', EmployeeTableView);
