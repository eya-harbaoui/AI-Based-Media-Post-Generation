import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { PostGenerator } from "./pages/PostGenerator";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { Landing } from "./pages/Landing";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <PostGenerator /> : <Landing />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/generate" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/generate" /> : <SignUp />}
        />
        <Route
          path="/generate"
          element={authUser ? <PostGenerator /> : <Navigate to="/" />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
