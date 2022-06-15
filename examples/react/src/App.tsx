import { Button, useResponsive } from "./lib";
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
