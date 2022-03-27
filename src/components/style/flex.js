import { css } from "styled-components";

// css 코드를 return 하는 함수를 사용함으로써 style code의 중복을 최소화 시킴
const flex = (jc = "center", ai = "center", direction = "row") => {
  return css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${direction};
  `;
};

export default flex;
