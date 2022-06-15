// global-style.ts
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 그밖에 글로벌 스타일 작성하기  */
`;
