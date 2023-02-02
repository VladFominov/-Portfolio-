import { Route, Routes } from "react-router-dom";
import "./index.css";
import { ContactsPage, HomePage, ProjectsPage, NotFoundPage } from "./pages";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
