import { html, LitElement, css } from 'lit';
import { useLanguageStore } from '../stores';
import { t } from '../utils/i18n';

export class EmployeeNotFoundMessage extends LitElement {
  static styles = [css`
    .employee-not-found-message {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      color: var(--themeColor);
      border-radius: 0.5rem;
    }
  `];

  constructor() {
    super();
    this.languageSubscription = useLanguageStore.subscribe(
      () => this.requestUpdate()
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.languageSubscription();
  }

  render() {
    return html`
      <div class="employee-not-found-message">
        <p>${t('employeeNotFound')}</p>
      </div>
    `;
  }
}

customElements.define('employee-not-found-message', EmployeeNotFoundMessage);