
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App
