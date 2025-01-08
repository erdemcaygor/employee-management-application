import { css } from 'lit';

export const baseStyles = css`
       .main-view {
        display: grid;
        grid-template-rows: 6rem 1fr;
        height: 100vh;
       }
       .main-view header {
        grid-row: 1;
       }
       .main-view main {
        grid-row: 2;
       }
       button.primary {
        background-color: #ff6200;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
       }
`;
