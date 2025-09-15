import { Download } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./themes/theme-1.css";

import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="wui-min-h-screen wui-bg-background wui-p-8">
      <div className="wui-max-w-4xl wui-mx-auto wui-space-y-8">
        <header>
          <h1 className="wui-text-4xl wui-font-bold wui-text-foreground wui-mb-2">
            Webbiffy UI - React
          </h1>
          <p className="wui-text-muted-foreground">
            A modern UI kit built with React, Tailwind CSS, and shadcn/ui
          </p>
        </header>

        <div className="wui-grid wui-gap-8">
          <section>
            <h2 className="wui-text-2xl wui-font-semibold wui-mb-4">Buttons</h2>
            <div className="wui-space-y-6">
              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Filled
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Button>Default</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="informative">Informative</Button>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Outline
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Button variant="outline">Outline</Button>
                  <Button variant="outline-neutral">Outline Neutral</Button>
                  <Button variant="outline-success">Outline Success</Button>
                  <Button variant="outline-danger">Outline Danger</Button>
                  <Button variant="outline-informative">
                    Outline Informative
                  </Button>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Ghost
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="ghost-neutral">Ghost Neutral</Button>
                  <Button variant="ghost-success">Ghost Success</Button>
                  <Button variant="ghost-danger">Ghost Danger</Button>
                  <Button variant="ghost-informative">Ghost Informative</Button>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Link
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Button variant="link">Link</Button>
                  <Button variant="link-neutral">Link Neutral</Button>
                  <Button variant="link-success">Link Success</Button>
                  <Button variant="link-danger">Link Danger</Button>
                  <Button variant="link-informative">Link Informative</Button>
                </div>
              </article>
            </div>

            <div className="wui-space-y-6 wui-mt-8">
              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Sizes
                </h3>
                <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Download />
                  </Button>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  States
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline">Normal Outline</Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                  <Button variant="ghost">Normal Ghost</Button>
                  <Button variant="ghost" disabled>
                    Disabled Ghost
                  </Button>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
