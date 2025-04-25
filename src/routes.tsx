import * as React from "react";

import {Route, Routes as RouterRoutes} from "react-router-dom";

import OverviewPage from "@/pages/OverviewPage";
import DuplicantsPage from "@/pages/DuplicantsPage";
import DuplicantEditorPage from "@/pages/DuplicantEditorPage";
import GeysersPage from "@/pages/GeysersPage";
import RawEditorPage from "@/pages/RawEditorPage";
import SettingsPage from "@/pages/SettingsPage";
import ChangelogPage from "@/pages/ChangelogPage";
import PlanetsPage from "@/pages/PlanetsPage";
import MaterialsPage from "@/pages/MaterialsPage";

const Routes: React.FC = () => (
    <RouterRoutes>
        <Route path="/" element={<OverviewPage />}/>
        <Route path="/duplicants" element={<DuplicantsPage />}/>
        <Route
            path="/duplicants/:gameObjectId"
            element={<DuplicantEditorPage />}
        />
        <Route path="/geysers" element={<GeysersPage />}/>
        <Route path="/raw" element={<RawEditorPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/materials" element={<MaterialsPage />}/>
        <Route path="/planets" element={<PlanetsPage />}/>
        <Route path="/changelog" element={<ChangelogPage />}/>
        <Route path="*" element={<OverviewPage />} />

    </RouterRoutes>
);
export default Routes;
