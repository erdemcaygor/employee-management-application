import { css } from 'lit';

export const langSelectStyles = css`
.lang-select {
      position: relative;
      display: inline-block;
      font-size: 0.75rem;
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