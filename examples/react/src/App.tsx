import { useResponsive } from "default-ui";
import { GlobalStyle } from "./constants/Global.style";
import { XD_DESKTOP_WIDTH, XD_MOBILE_WIDTH } from "./constants/Variables";
import { Home } from "./screens";
function App() {
  useResponsive(15, {
    pc: XD_DESKTOP_WIDTH,
    break: 900,
    mobile: XD_MOBILE_WIDTH
  });
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
