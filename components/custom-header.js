// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';

export class CustomHeader extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .header {
        margin: 1rem;
      }
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 0.5rem;
      }
      .header-actions {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .header-actions button {
        background-color: #f5f5f5;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
    <div class="header">
      <div class="header-content">
        <span>Employee Management</span>
        <div class="header-actions">
            <button>New Employee</button>
            <button>Logout</button>
        </div>
      </div>
    </div>  
    `;
  }
}
customElements.define('custom-header', CustomHeader);
