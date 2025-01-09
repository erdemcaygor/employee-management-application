import { css } from 'lit';

export const buttonStyles = css`
    button {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.75rem !important;
    }
    button.primary-btn {
        background-color: var(--themeColor);
        color: white;
        border: none;
        border-radius: 4px;
    }
    button.primary-btn:hover {
        background-color: var(--primaryButtonHoverColor);
    }
`;
