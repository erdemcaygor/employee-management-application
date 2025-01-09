import { css } from 'lit';

export const tableStyles = css`
        :host {
        display: block;
      }
      .table-container {
        overflow-x: auto;
        padding: 0.5rem 1rem;
        background-color: white;
        border-radius: 0.5rem;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }

      th, td {
        padding: 0.75rem;
        text-align: left;
        font-size: 0.75rem;
        border-bottom: 1px solid #e9e6e6;
      }

      th {
        color: var(--themeColor);
        font-weight: 500;
      }

      td {
        color: gray;
      }

      tr:hover {
        background-color: #f9f9f9;
      }
      .actions {
        display: flex;
        gap: 0.5rem;
      }
      .edit-icon, .delete-icon {
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s;
      }

      .edit-icon:hover {
        background-color: var(--themeColor)1a; /* 10% opacity */
      }

      .delete-icon:hover {
        background-color: var(--themeColor)1a; /* 10% opacity */
      }
      `;
