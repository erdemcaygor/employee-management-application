import { LitElement, html } from 'lit';
import { useLanguageStore } from '../stores/lang-store';
import { langSelectStyles } from '../styles';

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

  static styles = [langSelectStyles];

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