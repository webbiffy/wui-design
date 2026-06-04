import React from "react";
import ReactDOM from "react-dom/client";

import "./themes/theme-1.css";

import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <section>
        <h2>Buttons</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <Button>Default</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="informative">Informative</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section>
        <h2>Badges</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
          <Badge>Default</Badge>
          <Badge variant="bordered-success">Success</Badge>
          <Badge variant="bordered-danger">Danger</Badge>
          <Badge variant="filled-primary">Filled</Badge>
          <Badge radius="full">Full</Badge>
          <Badge size="md">Medium</Badge>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
