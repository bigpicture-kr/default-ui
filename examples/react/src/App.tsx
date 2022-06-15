import { useResponsive } from "@lib";
import { Home } from "./screens";
function App() {
  useResponsive();
  return (
    <>
      <Home />
    </>
  );
}

export default App;
