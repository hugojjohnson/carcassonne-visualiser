import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Interfaces
import Dashboard from "./components/Dashboard";
import { NoPage } from "./components/NoPage";

// Components

function App(): React.ReactElement {
  return (
      <BrowserRouter basename="nice">
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;