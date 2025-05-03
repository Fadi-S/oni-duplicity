import * as React from "react";
import { useSelector } from "react-redux";

import {redirect} from "react-router-dom";

import { hasSaveSelector } from "@/services/oni-save/selectors/save-game";

const RedirectIfNoSave: React.FC = () => {
  const hasSave = useSelector(hasSaveSelector);
  if (!hasSave) {
    redirect("/");
  }
  return null;
};

export default RedirectIfNoSave;
