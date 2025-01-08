import { LitElement, html, css } from 'lit';
import { useLanguageStore } from '../stores/lang-store';

export class LanguageSelect extends LitElement {
  static get properties() {
    return {
      currentLang: { type: String }
    };
  }

  constructor() {
    super();
    this.currentLang = useLanguageStore.getState()?.language || 'en';
  }

  static styles = css`
    .lang-select {
      position: relative;
      display: inline-block;
    }

    select {
      appearance: none;
      padding: 4px 24px 4px 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: white;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      outline: none;
    }

    select:focus {
      border-color: var(--themeColor);
      box-shadow: 0 0 0 2px var(--themeColor)1a;
    }

    .lang-select::after {
      content: '';
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #666;
      pointer-events: none;
    }
  `;

  handleLangChange(e) {
    const newLang = e.target.value;
    this.currentLang = newLang;
    localStorage.setItem('lang', newLang);
    useLanguageStore.getState().setLanguage(newLang);
    this.dispatchEvent(new CustomEvent('lang-change', {
      detail: { lang: newLang },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="lang-select">
        <select .value=${this.currentLang} @change=${this.handleLangChange}>
          <option value="en">🇺🇸 EN</option>
          <option value="tr">🇹🇷 TR</option>
        </select>
      </div>
    `;
  }
}

customElements.define('language-select', LanguageSelect);