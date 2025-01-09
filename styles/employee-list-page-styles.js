
import { css } from 'lit';

export const listPageStyles = css`
       .list-main-container {
        background-color: white
       }
       .header-actions {
        display: flex;
        gap: 0.5rem;
        align-items: center;
       }
       .actions-item {
        cursor: pointer;
        opacity: 0.5;
       }
       .actions-item.active {
        opacity: 1;
       }
`;