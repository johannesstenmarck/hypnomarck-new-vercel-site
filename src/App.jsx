import { Routes, Route } from "react-router-dom";
import SiteShell from "./components/SiteShell.jsx";

import OmHypnosPage from "./pages/OmHypnosPage.jsx";
import OmMigPage from "./pages/OmMigPage.jsx";

import OnlinePage from "./pages/OnlinePage.jsx";
import ProkrastineringFreezePage from "./pages/ProkrastineringFreezePage.jsx";

import EmetofobiPage from "./pages/EmetofobiPage.jsx";

import ScenskrackPage from "./pages/ScenskrackPage.jsx";
import HomePreview from './pages/HomePreview.jsx';
import PreviewPrivacy from './pages/PreviewPrivacy.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePreview />} />
        <Route path="/integritet-forhandsversion" element={<PreviewPrivacy />} />
        <Route path="/" element={<SiteShell />}>
          <Route path="emetofobi" element={<EmetofobiPage />} />
          <Route path="scenskrack" element={<ScenskrackPage />} />
          <Route path="om-hypnos" element={<OmHypnosPage />} />
          <Route path="om-mig" element={<OmMigPage />} />
          <Route path="hypnoterapi-online" element={<OnlinePage />} />
          <Route path="prokrastinering-sjalvtvivel-freeze" element={<ProkrastineringFreezePage />} />
        </Route>
      </Routes>

    </>
  );
}
