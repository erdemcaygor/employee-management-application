// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import { tableStyles } from '../styles';
import { useLanguageStore } from '../stores';
import { editIcon, deleteIcon } from './icons';
import { t } from '../utils/i18n';

export class EmployeeTableView extends LitElement {
  
  static styles = [tableStyles];

  static get properties() {
    return {
      employees: { type: Array }
    };
  }

  constructor() {
    super();
    // Subscribe to language changes
    this.languageSubscription = useLanguageStore.subscribe(
      () => this.requestUpdate()
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.languageSubscription();
  }

  handleDelete(employee) {
    this.dispatchEvent(new CustomEvent('delete-employee', { detail: { employee } }));
  }

  render() {
    return html`
    <div class="table-container">
    <table>
        <thead>
          <tr>
            <th>${t('firstName')}</th>
            <th>${t('lastName')}</th>
            <th>${t('dateOfEmployment')}</th>
            <th>${t('dateOfBirth')}</th>
            <th>${t('phone')}</th>
            <th>${t('email')}</th>
            <th>${t('department')}</th>
            <th>${t('position')}</th>
            <th>${t('actions')}</th>
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
                    <span @click=${() => this.handleDelete(employee)} class="delete-icon">${deleteIcon}</span>
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
