import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders as a span element with children", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe("SPAN");
  });

  it("has data-slot badge attribute", () => {
    render(<Badge>Label</Badge>);
    expect(screen.getByText("Label")).toHaveAttribute("data-slot", "badge");
  });

  it("merges custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("passes through additional props", () => {
    render(
      <Badge data-testid="test-badge" title="Badge title" id="badge-id">
        Props Badge
      </Badge>,
    );
    const badge = screen.getByTestId("test-badge");
    expect(badge).toHaveAttribute("title", "Badge title");
    expect(badge).toHaveAttribute("id", "badge-id");
  });

  it("renders all variant prop values without error", () => {
    const variants = [
      "default",
      "bordered-neutral",
      "bordered-success",
      "bordered-danger",
      "bordered-informative",
      "filled-primary",
      "filled-success",
      "filled-danger",
      "filled-informative",
    ] as const;

    for (const variant of variants) {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>);
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    }
  });

  it("renders all size prop values without error", () => {
    const sizes = ["default", "sm", "md"] as const;
    for (const size of sizes) {
      const { unmount } = render(<Badge size={size}>badge</Badge>);
      expect(screen.getByText("badge")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders all radius prop values without error", () => {
    const radii = ["default", "xl", "full"] as const;
    for (const radius of radii) {
      const { unmount } = render(<Badge radius={radius}>badge</Badge>);
      expect(screen.getByText("badge")).toBeInTheDocument();
      unmount();
    }
  });

  it("handles empty content", () => {
    render(<Badge data-testid="empty-badge" />);
    expect(screen.getByTestId("empty-badge")).toBeInTheDocument();
  });

  it("combines multiple props correctly", () => {
    render(
      <Badge
        variant="filled-success"
        size="md"
        radius="full"
        className="custom-badge"
        data-testid="combined"
      >
        Combined
      </Badge>,
    );
    const badge = screen.getByTestId("combined");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("custom-badge");
    expect(badge).toHaveAttribute("data-slot", "badge");
  });
});
