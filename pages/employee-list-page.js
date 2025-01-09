// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import '../components/employee-table-view';
import '../components/base-page-template';
import '../components/employee-list-view';
import '../components/employee-not-found-message';
import '../components/employee-delete-confirm';
import { listPageStyles } from '../styles/employee-list-page-styles';
import { t } from '../utils/i18n';
import { useLanguageStore, useEmployeeStore } from '../stores';
import { listViewIcon, tableViewIcon } from '../components/icons';
import { Notification } from '@vaadin/notification';

export class EmployeeListPage extends LitElement {
  static styles = [
    listPageStyles
  ];

  static get properties() {
    return {
      viewType: { type: String },
      employees: { type: Array },
      showDeleteConfirm: { type: Boolean, state: true },
      selectedEmployee: { type: Object, state: true }
    };
  }

  constructor() {
    super();
    this.viewType = 'table';
    this.showDeleteConfirm = false;
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

  confirmDelete(event) {
    this.selectedEmployee = event.detail.employee;
    this.showDeleteConfirm = true;
  }

  handleDelete() {
    this.showDeleteConfirm = false;
    const id = this.selectedEmployee.id;
    useEmployeeStore.getState().deleteEmployee(id);

    // Show notification
    Notification.show(t('employeeDeletedSuccessfully'), {
      position: 'top-end',
      duration: 4000,
      theme: 'success',
  });
  }

  cancelDelete() {
    console.log('cancelDelete');
    this.showDeleteConfirm = false;
    this.selectedEmployee = null;
  }

  render() {
    return html`<base-page-template header=${t('employees')}>
        <div slot="headerActions" class="header-actions">
          <span @click=${() => this.viewType = 'list'} class="actions-item ${this.viewType === 'list' ? 'active' : ''}">${listViewIcon}</span>
          <span @click=${() => this.viewType = 'table'} class="actions-item ${this.viewType === 'table' ? 'active' : ''}">${tableViewIcon}</span>
        </div>
        <employee-delete-confirm .opened=${this.showDeleteConfirm} @confirm=${this.handleDelete} @cancel=${this.cancelDelete} .employee=${this.selectedEmployee}></employee-delete-confirm>
        ${this.employees.length === 0 ? html`<employee-not-found-message></employee-not-found-message>` : 
        this.viewType === 'table' ? html`<employee-table-view .employees=${this.employees} @delete-employee=${this.confirmDelete}></employee-table-view>` : html`<employee-list-view @delete-employee=${this.confirmDelete} .employees=${this.employees}></employee-list-view>`
      }
    </base-page-template>`;
  }
}
customElements.define('employee-list-page', EmployeeListPage);