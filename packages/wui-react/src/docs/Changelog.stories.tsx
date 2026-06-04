import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useMemo, useCallback } from "react";

import {
  changelog,
  type ChangelogSection,
  type ChangelogEntry,
} from "../data/changelog";

const dotColor: Record<string, string> = {
  major: "hsl(var(--wui-danger))",
  minor: "hsl(var(--wui-informative))",
  patch: "hsl(var(--wui-success))",
};

const typeBadgeStyle: Record<string, React.CSSProperties> = {
  major: {
    background: "hsl(var(--wui-danger) / 0.1)",
    color: "hsl(var(--wui-danger))",
    borderColor: "hsl(var(--wui-danger) / 0.2)",
  },
  minor: {
    background: "hsl(var(--wui-informative) / 0.1)",
    color: "hsl(var(--wui-informative))",
    borderColor: "hsl(var(--wui-informative) / 0.2)",
  },
  patch: {
    background: "hsl(var(--wui-success) / 0.1)",
    color: "hsl(var(--wui-success))",
    borderColor: "hsl(var(--wui-success) / 0.2)",
  },
};

const defaultTypeBadgeStyle: React.CSSProperties = {
  background: "hsl(var(--wui-muted) / 0.1)",
  color: "hsl(var(--wui-muted-foreground))",
  borderColor: "hsl(var(--wui-muted) / 0.2)",
};

const ChangelogViewer = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("all");

  const summary = useMemo(() => {
    const totalChanges = changelog.reduce(
      (acc, section) => acc + section.changes.length,
      0,
    );
    return {
      totalChanges,
      latestVersion: changelog[0]?.version || "unknown",
    };
  }, []);

  const minorVersions = useMemo(() => {
    const minorVersionSet = new Set<string>();
    changelog.forEach(({ version }) => {
      const parts = version.split(".");
      if (parts.length >= 2) minorVersionSet.add(`${parts[0]}.${parts[1]}`);
    });
    return [
      "all",
      ...Array.from(minorVersionSet).sort((a, b) => {
        const [aMajor, aMinor] = a.split(".").map(Number);
        const [bMajor, bMinor] = b.split(".").map(Number);
        if (aMajor !== bMajor) return bMajor - aMajor;
        return bMinor - aMinor;
      }),
    ];
  }, []);

  const filteredData = useMemo(() => {
    if (selectedVersion === "all") return changelog;
    return changelog.filter(
      (section) =>
        section.version.startsWith(selectedVersion + ".") ||
        section.version === selectedVersion,
    );
  }, [selectedVersion]);

  const getDotStyle = useCallback(
    (type: string): React.CSSProperties => ({
      background: dotColor[type] ?? "hsl(var(--wui-muted))",
    }),
    [],
  );

  const getTypeBadgeStyle = useCallback(
    (type: string): React.CSSProperties =>
      typeBadgeStyle[type] ?? defaultTypeBadgeStyle,
    [],
  );

  return (
    <main className="cl-page">
      <header className="cl-header">
        <h1 className="cl-title">Changelog</h1>
        <p className="cl-subtitle">
          Version history and release notes for the Wui UI React library.
        </p>
        {summary && (
          <div className="cl-meta">
            <span>
              Latest version: <strong>{summary.latestVersion}</strong>
            </span>
          </div>
        )}
      </header>

      <div className="cl-filter-bar">
        <label htmlFor="version-filter" className="cl-filter-label">
          Version:
        </label>
        <select
          id="version-filter"
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className="cl-select"
        >
          {minorVersions.map((version) => (
            <option key={version} value={version}>
              {version === "all" ? "All Versions" : version}
            </option>
          ))}
        </select>
        {selectedVersion !== "all" && (
          <span className="cl-filter-hint">
            Showing patch versions within <strong>{selectedVersion}.x</strong>
          </span>
        )}
      </div>

      <section aria-label="Version history">
        {filteredData.map((section: ChangelogSection, sectionIndex: number) => (
          <article
            key={section.version}
            className="cl-card"
            aria-labelledby={`version-${section.version}`}
            style={{ marginBottom: sectionIndex < filteredData.length - 1 ? "1.5rem" : 0 }}
          >
            <header className="cl-card-header">
              <h2 id={`version-${section.version}`} className="cl-version">
                Version {section.version}
              </h2>
              {sectionIndex === 0 && selectedVersion === "all" && (
                <span className="cl-badge cl-badge-latest">Latest</span>
              )}
              {selectedVersion !== "all" &&
                section.version.startsWith(selectedVersion + ".") && (
                  <span className="cl-badge cl-badge-patch">Patch</span>
                )}
            </header>

            <section
              className="cl-card-body"
              aria-label={`Changes in version ${section.version}`}
              role="list"
            >
              {section.changes.map((change: ChangelogEntry, index: number) => (
                <div key={index} className="cl-change-row" role="listitem">
                  <div aria-hidden="true">
                    <div className="cl-dot" style={getDotStyle(change.type)} />
                  </div>

                  <div className="cl-change-body">
                    <div className="cl-change-top">
                      <div style={{ flex: 1 }}>
                        <p className="cl-description">{change.description}</p>
                        {change.details && change.details.length > 0 && (
                          <ul className="cl-details">
                            {change.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="cl-detail">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <span
                        className="cl-type-badge"
                        style={getTypeBadgeStyle(change.type)}
                        aria-label={`Change type: ${change.type}`}
                      >
                        {change.type}
                      </span>
                    </div>

                    <footer className="cl-change-footer">
                      {change.pr && (
                        <span className="cl-pr-chip">
                          <a
                            href={
                              change.prUrl ??
                              `https://github.com/webbiffy/wui-design/pull/${change.pr.replace("#", "")}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cl-pr-link"
                            title={`View pull request ${change.pr}`}
                          >
                            PR{change.pr}
                          </a>
                        </span>
                      )}
                      {change.commit && (
                        <span
                          className={`cl-commit-chip ${change.commitUrl ? "cl-commit-chip-linked" : "cl-commit-chip-plain"}`}
                        >
                          {change.commitUrl ? (
                            <a
                              href={change.commitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cl-commit-link"
                              title={`View commit ${change.commit}`}
                            >
                              {change.commit}
                            </a>
                          ) : (
                            change.commit
                          )}
                        </span>
                      )}
                      {change.author && (
                        <span>
                          by{" "}
                          {change.authorUrl ? (
                            <a
                              href={change.authorUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cl-author-link"
                              title={`View @${change.author} on GitHub`}
                            >
                              @{change.author}
                            </a>
                          ) : (
                            `@${change.author}`
                          )}
                        </span>
                      )}
                    </footer>
                  </div>
                </div>
              ))}
            </section>
          </article>
        ))}
      </section>

      <footer className="cl-footer">
        <p className="cl-footer-text">
          For the complete changelog, visit our{" "}
          <a
            href="https://github.com/webbiffy/wui-design/blob/main/packages/wui-react/CHANGELOG.md"
            className="cl-footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </p>
      </footer>
    </main>
  );
};

const meta: Meta<typeof ChangelogViewer> = {
  title: "Documentation/Changelog",
  component: ChangelogViewer,
  parameters: {
    docs: {
      description: {
        component:
          "View all changes made to the Wui UI React library organized by version.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChangelogViewer>;

export const Default: Story = {
  name: "Changelog",
  parameters: {
    layout: "fullscreen",
    actions: { disable: true },
    controls: { disable: true },
    backgrounds: { disable: true },
  },
};
