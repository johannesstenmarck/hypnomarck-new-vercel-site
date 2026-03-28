import { Routes, Route } from "react-router-dom";
import SiteShell from "./components/SiteShell.jsx";
import HomePage from "./pages/HomePage.jsx";
import OmHypnosPage from "./pages/OmHypnosPage.jsx";
import OmMigPage from "./pages/OmMigPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="om-hypnos" element={<OmHypnosPage />} />
        <Route path="om-mig" element={<OmMigPage />} />
      </Route>
    </Routes>
  );
}
