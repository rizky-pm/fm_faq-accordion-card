import { createGlobalStyle } from 'styled-components';
import { colors, fontFamily } from './variables';

import * as variables from './variables';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    body {
        box-sizing: border-box;
        font-family: ${fontFamily};
        color: ${colors.textPrimaryDark};
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, ${variables.colors.bgBlue} 0%, ${variables.colors.bgViolet} 100%);
    }
`;

export default GlobalStyle;
