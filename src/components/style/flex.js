import { css } from "styled-components";

const flex = (jc = "center", ai = "center", direction = "row") => {
  return css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${direction};
  `;
};

export default flex;
