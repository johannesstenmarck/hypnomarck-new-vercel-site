import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "./components/Seo.jsx";
import App from "./App.jsx";

export function render(path) {
  const context = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={path}><App /></StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = context;
  return { html, head: [helmet.title, helmet.meta, helmet.link, helmet.script].map(value => value.toString()).join("\n") };
}
