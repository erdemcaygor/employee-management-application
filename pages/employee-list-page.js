// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import '../components/employee-table-view';
import '../components/base-page-template';
import '../components/employee-list-view';
import '../components/employee-not-found-message';
import { listPageStyles } from '../styles/employee-list-page-styles';
import { t } from '../utils/i18n';
import { useLanguageStore, useEmployeeStore } from '../stores';
import { listViewIcon, tableViewIcon } from '../components/icons';

export class EmployeeListPage extends LitElement {
  static styles = [
    listPageStyles
  ];

  static get properties() {
    return {
      viewType: { type: String },
      employees: { type: Array }
    };
  }

  constructor() {
    super();
    this.viewType = 'table';
    this.employees = useEmployeeStore.getState().employees;
    // Subscribe to employees
    this.employeesSubscription = useEmployeeStore.subscribe(
      state => {
        this.employees = state.employees;
        this.requestUpdate();
      }
    );
    this.languageSubscription = useLanguageStore.subscribe(
      () => this.requestUpdate()
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.languageSubscription();
    this.employeesSubscription();
  }

  handleDelete(event) {
    const id = event.detail.id;
    useEmployeeStore.getState().deleteEmployee(id);
  }

  render() {
    return html`<base-page-template header=${t('employees')}>
        <div slot="headerActions" class="header-actions">
          <span @click=${() => this.viewType = 'list'} class="actions-item ${this.viewType === 'list' ? 'active' : ''}">${listViewIcon}</span>
          <span @click=${() => this.viewType = 'table'} class="actions-item ${this.viewType === 'table' ? 'active' : ''}">${tableViewIcon}</span>
        </div>
        ${this.employees.length === 0 ? html`<employee-not-found-message></employee-not-found-message>` : 
        this.viewType === 'table' ? html`<employee-table-view .employees=${this.employees} @delete-employee=${this.handleDelete}></employee-table-view>` : html`<employee-list-view @delete-employee=${this.handleDelete} .employees=${this.employees}></employee-list-view>`
      }
    </base-page-template>`;
  }
}
customElements.define('employee-list-page', EmployeeListPage);