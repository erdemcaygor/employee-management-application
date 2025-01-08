import { css } from 'lit';

export const formStyles = css`
  .form-container {
    padding: 0.5rem 1rem;
    background-color: white;
    border-radius: 0.5rem;
  }

  .form-row {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    flex-wrap: wrap;
  }

  form {
    margin: 0 auto;
    padding: 20px;
  }

  .form-group {
    margin-bottom: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input, select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  select {
    background-color: white;
  }

  button[type="submit"] {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }

  .form-submit-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .error {
        border-color: var(--errorColor) !important;
      }
      
    .error-message {
        color: var(--errorColor);
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
`; 