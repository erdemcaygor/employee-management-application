// ./pages/employee-list-view.js
import { LitElement, html } from 'lit';
import '../components/employee-table-view';
import '../components/base-page-template';
import { listViewStyles } from '../styles/employee-list-view-styles';
export class EmployeeListView extends LitElement {
  static styles = [
    listViewStyles
  ];

  render() {
    return html`<base-page-template header="Employees">
        <employee-table-view></employee-table-view>
    </base-page-template>`;
  }
}
customElements.define('employee-list-view', EmployeeListView);