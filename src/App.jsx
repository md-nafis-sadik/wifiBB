import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Router";

function App() {
  return (
    <div className="font-proxima">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
