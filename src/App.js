import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import "./index.css";
import AppBar from "./components/AppBar";
import Spiner from './components/Spiner';

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyProjectsPage  = lazy(() => import("./pages/ProjectsPage"));
const LazyContactsPage = lazy(() => import("./pages/ContactsPage"));
function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route index element={<LazyHomePage />}></Route>
          <Route path="projects" element={<LazyProjectsPage />}></Route>
          <Route path="contacts" element={<LazyContactsPage />}></Route>
          {/* <Route path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
