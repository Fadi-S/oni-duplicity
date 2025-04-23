import "es6-promise/auto";
import "typeface-roboto";

import "@/style.css";

import "@/debug";

import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./root";
import {Suspense} from "react";

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.render(
      <Suspense fallback={<div>Loading translations…</div>}>
        <Root />
      </Suspense>
, rootEl);
}
