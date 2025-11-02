import { Analytics } from "@vercel/analytics/react";
import Landing from "./features/Landing/Landing";

function App() {
  return (
    <>
      <Analytics />
      <Landing />
    </>
  );
}

export default App;
