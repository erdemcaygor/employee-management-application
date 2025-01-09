import { css } from 'lit';

export const inputStyles = css`
  input, select {
    border-radius: 0.25rem;
    outline: none;
    font-size: 0.75rem;
    font-family: 'Open Sans', sans-serif;
  }
  input:focus, select:focus {
    border-color: var(--themeColor);
    box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.1);
  }

  input.error, select.error {
    border-color: var(--errorColor);
  }

  input.error:focus, select.error:focus {
    border-color: var(--errorColor);
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.1);
  }
  label {
    font-size: 0.75rem;
    font-weight: bold;
  }
`;