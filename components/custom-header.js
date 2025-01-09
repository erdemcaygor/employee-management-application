// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';
import { employeeIcon, plusIcon } from './icons';
import './language-select';
import { t } from '../utils/i18n';
import { useLanguageStore } from '../stores/lang-store';
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
      .header-nav-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--themeColor);
        padding: 0.5rem;
      }
      .header-nav-item:hover {
        background-color: var(--lightGrey);
        cursor: pointer;
      }
    `,
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
    return html`
    <div class="header">
      <div class="header-content">
        <span>Employee Management</span>
        <div class="header-actions">
        <a href="/" class="header-nav-item">
            <span>${employeeIcon}</span>
            ${t('employees')}
        </a>
        <a href="/new-employee" class="header-nav-item">
            <span>${plusIcon}</span>
            ${t('addNew')}
        </a>
        <language-select></language-select>
        </div>
      </div>
    </div>  
    `;
  }
}
customElements.define('custom-header', CustomHeader);
