import { css } from 'lit';

export const mainViewStyles = css`
       .main-view {
        display: grid;
        grid-template-rows: 4rem 1fr;
        height: 100vh;
       }
       .main-view header {
        grid-row: 1;
       }
       .main-view main {
        grid-row: 2;
       }
      `;
