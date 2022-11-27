import { Route, Routes } from "react-router-dom";
import WelcomePage from "./views/WelcomePage/WelcomePage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route index element={<WelcomePage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
