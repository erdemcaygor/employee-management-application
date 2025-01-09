import { LitElement, html, css } from 'lit';
import '@vaadin/dialog/vaadin-dialog.js';
import { t } from '../utils/i18n';

export class EmployeeDeleteConfirm extends LitElement {
    static get properties() {
        return {
            opened: { type: Boolean },
            employee: { type: Object }
        };
    }

    constructor() {
        super();
        this.opened = false;
    }

    static styles = [
      css`
    button {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.75rem !important;
    }
    button.primary-btn {
        background-color: var(--themeColor);
        color: white;
        border: none;
        border-radius: 4px;
    }
    button.primary-btn:hover {
        background-color: var(--primaryButtonHoverColor);
    }
      `
    ];

    render() {
        return html`
            <vaadin-dialog
                .opened="${this.opened}"
                @opened-changed="${(event) => {
                    if (!event.detail.value) {
                        this.dispatchEvent(new CustomEvent('cancel'));
                    }
                }}"
                header="${t('areYouSure')}"
                .renderer="${(root) => {
                    if (root.firstElementChild) {
                        return;
                    }
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <p>${t('deleteEmployeeConfirm', { 
                            name: this.employee?.firstName || '', 
                            lastName: this.employee?.lastName || '' 
                        })}</p>
                        <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
                            <button class="primary-btn" id="confirm-btn">${t('delete')}</button>
                            <button id="cancel-btn">${t('cancel')}</button>
                        </div>
                    `;

                    const confirmBtn = div.querySelector('#confirm-btn');
                    const cancelBtn = div.querySelector('#cancel-btn');

                    confirmBtn.addEventListener('click', () => {
                        this.dispatchEvent(new CustomEvent('confirm'));
                        this.opened = false;
                    });

                    cancelBtn.addEventListener('click', () => {
                        this.dispatchEvent(new CustomEvent('cancel'));
                        this.opened = false;
                    });

                    root.appendChild(div);
                }}"
            ></vaadin-dialog>
        `;
    }
}

customElements.define('employee-delete-confirm', EmployeeDeleteConfirm);