import { css } from 'lit';

export const tableStyles = css`
        :host {
        display: block;
        padding: 0;
        margin: 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
      }

      th, td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      th {
        background-color: #f5f5f5;
        font-weight: bold;
      }

      tr:hover {
        background-color: #f9f9f9;
      }`;