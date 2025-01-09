import { css } from 'lit';

export const listStyles = css`
.employee-list {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .employee-card {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      display: flex;
      flex:1;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 15rem;
    }

    .employee-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .info-group {
      min-width: 200px;
    }

    .info-label {
      color: #666;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }

    .info-value {
      font-size: 1rem;
      color: #333;
    }

    .actions {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid #e0e0e0;
    }

    .action-button {
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .action-button:hover {
      background-color: #f5f5f5;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
      `;
