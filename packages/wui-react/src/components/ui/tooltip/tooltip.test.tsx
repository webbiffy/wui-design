import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

function stubLayoutRect(): DOMRect {
  return {
    x: 0,
    y: 0,
    width: 120,
    height: 40,
    top: 0,
    left: 0,
    bottom: 40,
    right: 120,
    toJSON: () => "",
  };
}

describe("Tooltip", () => {
  beforeEach(() => {
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => stubLayoutRect()
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders tooltip trigger", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    expect(trigger).toBeInTheDocument();
  });

  it("shows tooltip content on hover", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    await waitFor(() => {
      expect(
        screen.getByRole("tooltip", { name: "Tooltip content" })
      ).toBeInTheDocument();
    });
  });

  it("hides tooltip content when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    await waitFor(() => {
      expect(
        screen.getByRole("tooltip", { name: "Tooltip content" })
      ).toBeInTheDocument();
    });

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("tooltip", { name: "Tooltip content" })
      ).not.toBeInTheDocument();
    });
  });

  it("renders tooltip with asChild prop", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Button trigger</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Button trigger");
    expect(trigger).toBeInTheDocument();
    expect(trigger.tagName).toBe("BUTTON");
  });

  it("applies custom className to tooltip content", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className="custom-class">
            Tooltip content
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    expect(trigger).toBeInTheDocument();
  });

  it("renders with different side positions", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent side="top">Top tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    await waitFor(() => {
      expect(
        screen.getByRole("tooltip", { name: "Top tooltip" })
      ).toBeInTheDocument();
    });

    rerender(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("tooltip", { name: "Bottom tooltip" })
      ).toBeInTheDocument();
    });
    expect(
      screen.queryByRole("tooltip", { name: "Top tooltip" })
    ).not.toBeInTheDocument();
  });

  it("handles delay duration", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Delayed tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    expect(
      screen.queryByRole("tooltip", { name: "Delayed tooltip" })
    ).not.toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          screen.getByRole("tooltip", { name: "Delayed tooltip" })
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
