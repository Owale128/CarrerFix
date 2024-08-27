import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  return (
    <div>
      <button></button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
