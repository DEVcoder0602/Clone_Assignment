import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <>
      <Landing />;
      <ToastContainer />
    </>
  );
}

export default App;
