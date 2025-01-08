// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import { tableStyles } from '../styles';
import { useEmployeeStore } from '../stores/employee-store';
import { editIcon, deleteIcon } from './icons';

export class EmployeeTableView extends LitElement {
  
  static styles = [tableStyles];

  constructor() {
    super();
    this.employees = useEmployeeStore.getState().employees;
    // Initial subscription
    this.employeesSubscription = useEmployeeStore.subscribe(
      state => {
        this.employees = state.employees;
        this.requestUpdate();
      }
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.employeesSubscription();
  }

  static get properties() {
    return {
      employees: { type: Array, state: true }
    };
  }

  handleDelete(id) {
    useEmployeeStore.getState().deleteEmployee(id);
  }

  render() {
    return html`
    <div class="table-container">
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
          ${this.employees?.map(employee => html`
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
                <div class="actions">
                    <a href="/employees/${employee.id}" class="edit-icon">
                        <span>${editIcon}</span>
                    </a>
                    <span @click=${() => this.handleDelete(employee.id)} class="delete-icon">${deleteIcon}</span>
                </div>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    </div>
    `;
  }
}

customElements.define('employee-table-view', EmployeeTableView);
