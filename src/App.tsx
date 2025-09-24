import { RouterProvider } from "react-router-dom";
import { useRouter } from "./routes";

function App() {
  const router = useRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
