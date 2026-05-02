import { Download, Info } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./themes/theme-1.css";

import { Button } from "./components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ButtonTooltip,
} from "./components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
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

          <section>
            <h2 className="wui-text-2xl wui-font-semibold wui-mb-4">Tooltips</h2>
            <div className="wui-space-y-6">
              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Basic Tooltip
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      <p>This is a basic tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="success">Success tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="success">
                      <p>This is a success tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="danger">Danger tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="danger">
                      <p>This is a danger tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Outline tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      <p>Outline button tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost">Ghost tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      <p>Ghost button tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link">Link tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      <p>Link button tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  With Icon
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Info className="wui-size-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      <p>Additional information</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Click to open (ghost & outline)
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <ButtonTooltip
                    variant="ghost"
                    content="Opens on click. Stays open until you click outside or press Escape."
                  >
                    Ghost — click for details
                  </ButtonTooltip>
                  <ButtonTooltip
                    variant="outline"
                    content="Opens on click. Stays open until you click outside or press Escape."
                  >
                    Outline — click for details
                  </ButtonTooltip>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Positions
                </h3>
                <div className="wui-flex wui-flex-col wui-items-center wui-gap-4 wui-p-8">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Top</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default" side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>

                  <div className="wui-flex wui-gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>Left</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="default" side="left">
                        <p>Tooltip on left</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>Right</Button>
                      </TooltipTrigger>
                      <TooltipContent variant="default" side="right">
                        <p>Tooltip on right</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default" side="bottom">
                      <p>Tooltip on bottom</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </article>

              <article>
                <h3 className="wui-text-sm wui-font-medium wui-text-gray-700 wui-mb-2">
                  Long Content
                </h3>
                <div className="wui-flex wui-flex-wrap wui-gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="wui-max-w-[220px] wui-min-w-0 wui-overflow-hidden wui-text-ellipsis wui-whitespace-nowrap">
                        Very long button label that will be truncated with an
                        ellipsis
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default" className="wui-max-w-xs">
                      <p>
                        This is a longer tooltip that contains more information
                        and wraps to multiple lines when needed. The full text
                        is visible in the tooltip even when the button label is
                        truncated.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
      </div>
    </TooltipProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
