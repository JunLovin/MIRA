import EarlyAccess from "./features/early/EarlyAccess";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <EarlyAccess />
    </>
  );
}

export default App;
