import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useMemo, useCallback } from "react";

import {
  changelog,
  type ChangelogSection,
  type ChangelogEntry,
} from "../data/changelog";

// Performance-optimized changelog viewer
const ChangelogViewer = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("all");

  const summary = useMemo(() => {
    // Calculate summary manually for small changelogs
    const totalChanges = changelog.reduce(
      (acc, section) => acc + section.changes.length,
      0
    );
    const changeTypes = changelog.reduce(
      (acc, section) => {
        section.changes.forEach((change) => {
          acc[change.type] = (acc[change.type] || 0) + 1;
        });
        return acc;
      },
      {} as Record<string, number>
    );

    return {
      totalChanges,
      latestVersion: changelog[0]?.version || "unknown",
      changeTypes,
    };
  }, []);

  // Get unique minor versions for filter (e.g., 2.1, 2.0, 1.2, 1.1, 1.0)
  const minorVersions = useMemo(() => {
    const versions = changelog.map((section) => section.version);
    const minorVersionSet = new Set<string>();

    versions.forEach((version) => {
      // Extract minor version (e.g., "1.1" from "1.1.0")
      const parts = version.split(".");
      if (parts.length >= 2) {
        const minorVersion = `${parts[0]}.${parts[1]}`;
        minorVersionSet.add(minorVersion);
      }
    });

    // Sort versions in descending order (newest first)
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

  // Filter data based on selected minor version
  const filteredData = useMemo(() => {
    if (selectedVersion === "all") {
      return changelog;
    }

    // Filter to show only versions that start with the selected minor version
    // e.g., if selectedVersion is "1.1", show "1.1.0", "1.1.1", etc.
    return changelog.filter(
      (section) =>
        section.version.startsWith(selectedVersion + ".") ||
        section.version === selectedVersion
    );
  }, [selectedVersion]);

  // Memoized utility functions
  const getChangeTypeColor = useCallback((type: string) => {
    switch (type) {
      case "major":
        return "wui-bg-danger";
      case "minor":
        return "wui-bg-informative";
      case "patch":
        return "wui-bg-success";
      default:
        return "wui-bg-muted";
    }
  }, []);

  const getChangeTypeBadge = useCallback((type: string) => {
    switch (type) {
      case "major":
        return "wui-bg-danger/10 wui-text-danger wui-border wui-border-danger/20";
      case "minor":
        return "wui-bg-informative/10 wui-text-informative wui-border wui-border-informative/20";
      case "patch":
        return "wui-bg-success/10 wui-text-success wui-border wui-border-success/20";
      default:
        return "wui-bg-muted/10 wui-text-muted-foreground wui-border wui-border-muted/20";
    }
  }, []);

  return (
    <main
      className="wui-max-w-6xl wui-mx-auto wui-p-6 wui-space-y-6"
      style={{ fontFamily: "Nunito Sans, sans-serif" }}
    >
      <header className="wui-border-b wui-pb-6">
        <h1 className="wui-text-3xl wui-font-bold wui-text-foreground wui-mb-2">
          Changelog
        </h1>
        <p className="wui-text-muted-foreground">
          Version history and release notes for the Wui UI React library.
        </p>
        {summary && (
          <div className="wui-mt-4 wui-flex wui-flex-wrap wui-gap-4 wui-text-sm">
            <span className="wui-text-muted-foreground">
              Latest version: <strong>{summary.latestVersion}</strong>
            </span>
          </div>
        )}
      </header>

      {/* Version Filter */}
      <div className="wui-flex wui-items-center wui-space-x-4 wui-p-4 wui-bg-muted/50 wui-rounded-lg">
        <div className="wui-flex wui-items-center wui-space-x-2">
          <label
            htmlFor="version-filter"
            className="wui-text-sm wui-font-medium"
          >
            Version:
          </label>
          <select
            id="version-filter"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="wui-px-3 wui-py-1 wui-border wui-rounded wui-text-sm wui-text-foreground wui-bg-background"
          >
            {minorVersions.map((version) => (
              <option key={version} value={version}>
                {version === "all" ? "All Versions" : version}
              </option>
            ))}
          </select>
        </div>

        <div className="wui-text-sm wui-text-muted-foreground">
          {selectedVersion !== "all" && (
            <>
              Showing patch versions within <strong>{selectedVersion}.x</strong>
            </>
          )}
        </div>
      </div>

      {/* Changelog Content */}
      <section className="wui-space-y-6" aria-label="Version history">
        {filteredData.map((section: ChangelogSection, sectionIndex: number) => (
          <article
            key={section.version}
            className="wui-border wui-border-input wui-rounded-lg wui-overflow-hidden"
            aria-labelledby={`version-${section.version}`}
          >
            <header className="wui-bg-muted/50 wui-px-6 wui-py-4 wui-border-b">
              <div className="wui-flex wui-items-center wui-justify-between">
                <h2
                  id={`version-${section.version}`}
                  className="wui-text-xl wui-font-semibold wui-text-foreground"
                >
                  Version {section.version}
                </h2>
                {sectionIndex === 0 && selectedVersion === "all" && (
                  <span className="wui-inline-flex wui-items-center wui-px-2.5 wui-py-0.5 wui-rounded-full wui-text-xs wui-font-medium wui-bg-informative/10 wui-text-informative wui-border wui-border-informative/20">
                    Latest
                  </span>
                )}
                {selectedVersion !== "all" &&
                  section.version.startsWith(selectedVersion + ".") && (
                    <span className="wui-inline-flex wui-items-center wui-px-2.5 wui-py-0.5 wui-rounded-full wui-text-xs wui-font-medium wui-bg-success/10 wui-text-success wui-border wui-border-success/20">
                      Patch
                    </span>
                  )}
              </div>
            </header>

            <section
              className="wui-p-6 wui-space-y-4"
              aria-label={`Changes in version ${section.version}`}
              role="list"
            >
              {section.changes.map((change: ChangelogEntry, index: number) => (
                <div
                  key={index}
                  className="wui-flex wui-items-start wui-space-x-3"
                  role="listitem"
                >
                  <div className="wui-flex-shrink-0" aria-hidden="true">
                    <div
                      className={`wui-w-2 wui-h-2 wui-rounded-full wui-mt-2 ${getChangeTypeColor(change.type)}`}
                    />
                  </div>
                  <div className="wui-flex-1 wui-min-w-0">
                    <div className="wui-flex wui-items-start wui-justify-between">
                      <div className="wui-flex-1">
                        <p className="wui-text-sm wui-text-foreground">
                          {change.description}
                        </p>
                        {change.details && change.details.length > 0 && (
                          <ul className="wui-mt-2 wui-ml-4 wui-space-y-1">
                            {change.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="wui-text-xs wui-text-muted-foreground wui-relative"
                              >
                                <span className="wui-absolute -wui-left-3 wui-text-muted-foreground/50">
                                  •
                                </span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <span
                        className={`wui-ml-2 wui-inline-flex wui-items-center wui-px-2 wui-py-1 wui-rounded-full wui-text-xs wui-font-medium ${getChangeTypeBadge(change.type)}`}
                        aria-label={`Change type: ${change.type}`}
                      >
                        {change.type}
                      </span>
                    </div>
                    <footer className="wui-mt-2 wui-flex wui-items-center wui-space-x-4 wui-text-xs wui-text-muted-foreground">
                      {change.pr && (
                        <span className="wui-px-2 wui-py-1 wui-rounded wui-bg-success/10 wui-border wui-border-success/20 hover:wui-bg-success/20 wui-transition-colors">
                          <a
                            href={
                              change.prUrl ??
                              `https://github.com/webbiffy/wui-design/pull/${change.pr.replace("#", "")}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wui-text-success hover:wui-text-success/80 wui-transition-colors"
                            title={`View pull request ${change.pr}`}
                          >
                            PR{change.pr}
                          </a>
                        </span>
                      )}
                      {change.commit && (
                        <span
                          className={`wui-font-mono wui-px-2 wui-py-1 wui-rounded wui-transition-colors ${
                            change.commitUrl
                              ? "wui-bg-informative/10 wui-border wui-border-informative/20 hover:wui-bg-informative/20"
                              : "wui-bg-muted"
                          }`}
                        >
                          {change.commitUrl ? (
                            <a
                              href={change.commitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="wui-text-informative hover:wui-text-informative/80 wui-transition-colors"
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
                              className="wui-text-informative hover:wui-text-informative/80 wui-transition-colors hover:wui-underline"
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

      <footer className="wui-text-center wui-pt-8 wui-border-t wui-border-input">
        <p className="wui-text-sm wui-text-muted-foreground">
          For the complete changelog, visit our{" "}
          <a
            href="https://github.com/webbiffy/wui-design/blob/main/packages/wui-react/CHANGELOG.md"
            className="wui-text-informative hover:wui-text-informative/80 wui-transition-colors"
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
