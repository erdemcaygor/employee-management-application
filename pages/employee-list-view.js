// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import '../components/employee-table-view';
import '../components/base-page-template';
import { listViewStyles } from '../styles/employee-list-view-styles';
import { t } from '../utils/i18n';
import { useLanguageStore } from '../stores';
export class EmployeeListView extends LitElement {
  static styles = [
    listViewStyles
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

  render() {
    return html`<base-page-template header=${t('employees')}>
        <employee-table-view></employee-table-view>
    </base-page-template>`;
  }
}
customElements.define('employee-list-view', EmployeeListView);