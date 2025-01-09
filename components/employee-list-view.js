
// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import { listStyles } from '../styles';
import { useLanguageStore } from '../stores';
import { editIcon, deleteIcon } from './icons';
import { t } from '../utils/i18n';

export class EmployeeListView extends LitElement {
  
  static styles = [listStyles];

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
    this.employeesSubscription();
    this.languageSubscription();
  }

  handleDelete(id) {
    this.dispatchEvent(new CustomEvent('delete-employee', { detail: { id } }));
  }

  render() {
    return html`
         <div class="employee-list">
        ${this.employees?.map(employee => html`
          <div class="employee-card">
            <div class="actions">
              <a href="/employees/${employee.id}" class="action-button">
                ${editIcon}
              </a>
              <div class="action-button" @click=${() => this.handleDelete(employee.id)}>
                ${deleteIcon}
              </div>
            </div>
            <div class="employee-info">
              <div class="info-group">
                <div class="info-label">${t('name')}</div>
                <div class="info-value">${employee.firstName} ${employee.lastName}</div>
              </div>
              
              <div class="info-group">
                <div class="info-label">${t('department')}</div>
                <div class="info-value">${employee.department}</div>
              </div>
              
              <div class="info-group">
                <div class="info-label">${t('position')}</div>
                <div class="info-value">${employee.position}</div>
              </div>
              
              <div class="info-group">
                <div class="info-label">${t('email')}</div>
                <div class="info-value">${employee.email}</div>
              </div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('employee-list-view', EmployeeListView);
