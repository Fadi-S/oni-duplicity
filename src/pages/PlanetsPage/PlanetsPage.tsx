import React from "react";
import { DLCIds } from "@/parser/main";

import PageContainer from "@/components/PageContainer";
import RedirectIfNoSave from "@/components/RedirectIfNoSave";
import RequireDLC from "@/components/RequireDLC";

import PlanetList from "./components/PlanetList";

const PlanetsPage: React.FC = () => (
  <PageContainer title="Planets">
    <RedirectIfNoSave />
      <RequireDLC dlcId={DLCIds.None} fallback={<div>No DLC</div>}>
      <PlanetList />
    </RequireDLC>
  </PageContainer>
);

export default PlanetsPage;
