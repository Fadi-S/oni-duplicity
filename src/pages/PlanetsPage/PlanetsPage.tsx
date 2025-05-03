import React from "react";
import { DLCIds } from "@/parser/main";

import RequireDLC from "@/components/RequireDLC";

import PlanetList from "./components/PlanetList";

const PlanetsPage: React.FC = () => (
  <div title="Planets">
      <RequireDLC dlcId={DLCIds.None} fallback={<div>No DLC</div>}>
      <PlanetList />
    </RequireDLC>
  </div>
);

export default PlanetsPage;
