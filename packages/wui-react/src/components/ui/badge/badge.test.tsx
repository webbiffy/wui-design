import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders with default variant, size, and radius", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "wui-border-primary",
      "wui-text-xs",
      "wui-rounded-md"
    );
    expect(badge).toHaveAttribute("data-slot", "badge");
  });

  it("renders with different variants", () => {
    // Test default (bordered) variant
    const { rerender } = render(<Badge variant="default">Default</Badge>);
    let badge = screen.getByText("Default");
    expect(badge).toHaveClass("wui-border-primary", "wui-bg-primary/15");

    // Test bordered variants
    rerender(<Badge variant="bordered-neutral">Neutral</Badge>);
    badge = screen.getByText("Neutral");
    expect(badge).toHaveClass("wui-border-input", "wui-bg-neutral/15");

    rerender(<Badge variant="bordered-success">Success</Badge>);
    badge = screen.getByText("Success");
    expect(badge).toHaveClass("wui-border-success", "wui-bg-success/15");

    rerender(<Badge variant="bordered-danger">Danger</Badge>);
    badge = screen.getByText("Danger");
    expect(badge).toHaveClass("wui-border-danger", "wui-bg-danger/15");

    rerender(<Badge variant="bordered-informative">Informative</Badge>);
    badge = screen.getByText("Informative");
    expect(badge).toHaveClass("wui-border-informative", "wui-bg-informative/15");

    // Test filled variants
    rerender(<Badge variant="filled-primary">Primary</Badge>);
    badge = screen.getByText("Primary");
    expect(badge).toHaveClass("wui-bg-primary", "wui-text-primary-foreground");

    rerender(<Badge variant="filled-success">Success</Badge>);
    badge = screen.getByText("Success");
    expect(badge).toHaveClass("wui-bg-success", "wui-text-success-foreground");

    rerender(<Badge variant="filled-danger">Danger</Badge>);
    badge = screen.getByText("Danger");
    expect(badge).toHaveClass("wui-bg-danger", "wui-text-danger-foreground");

    rerender(<Badge variant="filled-informative">Informative</Badge>);
    badge = screen.getByText("Informative");
    expect(badge).toHaveClass("wui-bg-informative", "wui-text-informative-foreground");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Badge size="default">Default</Badge>);
    let badge = screen.getByText("Default");
    expect(badge).toHaveClass("wui-text-xs", "wui-py-0.5", "wui-px-2");

    rerender(<Badge size="sm">Small</Badge>);
    badge = screen.getByText("Small");
    expect(badge).toHaveClass("wui-text-sm", "wui-py-0.5", "wui-px-2.5");

    rerender(<Badge size="md">Medium</Badge>);
    badge = screen.getByText("Medium");
    expect(badge).toHaveClass("wui-text-base", "wui-py-1", "wui-px-2.5");
  });

  it("renders with different radius options", () => {
    const { rerender } = render(<Badge radius="default">Default</Badge>);
    let badge = screen.getByText("Default");
    expect(badge).toHaveClass("wui-rounded-md");

    rerender(<Badge radius="xl">Extra Large</Badge>);
    badge = screen.getByText("Extra Large");
    expect(badge).toHaveClass("wui-rounded-xl");

    rerender(<Badge radius="full">Full</Badge>);
    badge = screen.getByText("Full");
    expect(badge).toHaveClass("wui-rounded-full", "wui-min-h-5", "wui-min-w-5");
  });

  it("accepts custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge).toHaveClass("custom-class");
  });

  it("renders custom element via render prop", () => {
    render(
      <Badge render={<a href="/test" />}>
        Link Badge
      </Badge>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveAttribute("data-slot", "badge");
    expect(link).toHaveClass("wui-border-primary"); // Should have badge styles
  });

  it("renders as span element by default", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    expect(badge.tagName).toBe("SPAN");
  });

  it("combines multiple props correctly", () => {
    render(
      <Badge
        variant="filled-success"
        size="md"
        radius="full"
        className="custom-badge"
      >
        Combined
      </Badge>
    );

    const badge = screen.getByText("Combined");
    expect(badge).toHaveClass(
      // Variant classes
      "wui-bg-success",
      "wui-text-success-foreground",
      // Size classes
      "wui-text-base",
      "wui-py-1",
      "wui-px-2.5",
      // Radius classes
      "wui-rounded-full",
      "wui-min-h-5",
      "wui-min-w-5",
      // Custom class
      "custom-badge"
    );
  });

  it("passes through additional props", () => {
    render(
      <Badge data-testid="test-badge" title="Badge title" id="badge-id">
        Props Badge
      </Badge>
    );

    const badge = screen.getByTestId("test-badge");
    expect(badge).toHaveAttribute("title", "Badge title");
    expect(badge).toHaveAttribute("id", "badge-id");
  });

  it("handles empty content", () => {
    render(<Badge data-testid="empty-badge" />);
    const badge = screen.getByTestId("empty-badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("wui-border-primary");
  });
});
