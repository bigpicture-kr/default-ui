import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: {
      mainBackground: string;
    };
    light: {
      mainBackground: string;
    };
  }
}
