import { Button, useResponsive } from "default-uii";
import { Home } from "./screens";
function App() {
  useResponsive();
  return (
    <>
      <Button label={"das"} />
      <Home />
    </>
  );
}

export default App;
