// global-style.ts
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  
  input {
    outline: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; // ios default css
    border: none;
  }

  svg,img {
    vertical-align: top;
  }
  
  body {
    will-change: overflow-y, position;
  }
`;
