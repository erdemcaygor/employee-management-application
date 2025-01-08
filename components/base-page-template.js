// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';

export class BasePageTemplate extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      header: { type: String }
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      .container {
        display: grid;
        grid-template-columns: [main-start] 1fr [content-start] minmax(0, 100rem) [content-end] 1fr [main-end];
        padding: 0 1rem;
      }
      .content {
        grid-column: content-start / content-end;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .header-title {
        font-size: 1.5rem;
        font-weight: 500;
      }
      .header > * {
        color: var(--themeColor);
      }
    `,
  ];

  render() {
    return html`
    <div class="container">
        <div class="content">
            <div class="header">
                <span class="header-title">${this.header}</span>
                <slot name="headerActions"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
    `;
  }
}

customElements.define('base-page-template', BasePageTemplate);
