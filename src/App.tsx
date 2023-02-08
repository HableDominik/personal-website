import './App.css';
import { Route, Routes, Navigate } from "react-router";

import NavBarComponent from './components/NavBarComponent';
import Home from "./container/HomeContainer";
import Links from "./container/LinksContainer";

function App() {
  return (
    <Routes>
      <Route path="" element={<NavBarComponent />}>
        <Route path="/home" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>

  );
}

export default App;
