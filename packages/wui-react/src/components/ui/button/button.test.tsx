import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders as a button element with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is set", () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("merges custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("forwards ref to the button element", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes through additional props", () => {
    render(<Button data-testid="my-btn" aria-label="Submit" type="submit">Go</Button>);
    const button = screen.getByTestId("my-btn");
    expect(button).toHaveAttribute("aria-label", "Submit");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("renders all variant prop values without error", () => {
    const variants = [
      "default", "success", "danger", "informative",
      "outline", "outline-neutral", "outline-success", "outline-danger", "outline-informative",
      "ghost", "ghost-neutral", "ghost-success", "ghost-danger", "ghost-informative",
      "link", "link-neutral", "link-success", "link-danger", "link-informative",
    ] as const;

    for (const variant of variants) {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });

  it("renders all size prop values without error", () => {
    const sizes = ["default", "sm", "lg", "icon"] as const;
    for (const size of sizes) {
      const { unmount } = render(<Button size={size}>btn</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    }
  });
});
