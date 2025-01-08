import { css } from 'lit';

export const buttonStyles = css`
       button.primary-btn {
        background-color: var(--themeColor);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
       }
       button.primary-btn:hover {
        background-color: var(--primaryButtonHoverColor);
       }
`;
