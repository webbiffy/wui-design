import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("wui-bg-primary", "wui-h-9");
  });

  it("renders with different variants", () => {
    // Test filled variants
    const { rerender } = render(<Button variant="default">Default</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass("wui-bg-primary");

    rerender(<Button variant="danger">Danger</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-bg-danger");

    // Test outline variants
    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-border-primary");

    rerender(<Button variant="outline-success">Outline Success</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-border-success");

    // Test ghost variants
    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-text-primary");

    rerender(<Button variant="ghost-danger">Ghost Danger</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-text-danger");

    // Test link variants
    rerender(<Button variant="link">Link</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-underline-offset-4");

    rerender(<Button variant="link-neutral">Link Neutral</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-text-foreground");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass("wui-h-8");

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-h-10");

    rerender(<Button size="icon">Icon</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("wui-h-9", "wui-w-9");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
