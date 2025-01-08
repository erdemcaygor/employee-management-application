// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';

export class EmployeeListView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div>
        <employee-table-view></employee-table-view>
    </div>`;
  }
}
customElements.define('employee-list-view', EmployeeListView);