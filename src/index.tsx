import "es6-promise/auto";
import "typeface-roboto";

import "@/style.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import Root from "./root";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

createRoot(container).render(
    <Suspense fallback={<div>Loading translations…</div>}>
        <Root />
    </Suspense>
);
