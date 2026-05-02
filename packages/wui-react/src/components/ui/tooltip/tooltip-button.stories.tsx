import type { Meta, StoryObj } from "@storybook/react-vite";

import { disableAllExcept, commonArgTypes } from "@/lib/storybook-utils";

import { Button } from "../button/button";

import { ButtonTooltip } from "./button-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const meta: Meta = {
  title: "UI/ButtonTooltip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    side: "top",
    sideOffset: 4,
    delayDuration: 700,
  },
  render: (args) => (
    <Tooltip delayDuration={args.delayDuration ?? 700}>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>

      <TooltipContent
        variant="default"
        side={args.side ?? "top"}
        sideOffset={args.sideOffset ?? 4}
      >
        <p>{args.content}</p>
      </TooltipContent>
    </Tooltip>
  ),
  argTypes: {
    ...commonArgTypes.interactive(),
  },
};

export const Positions: Story = {
  render: () => (
    <div className="wui-flex wui-flex-col wui-items-center wui-gap-8 wui-p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Top</Button>
        </TooltipTrigger>

        <TooltipContent variant="default" side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <div className="wui-flex wui-gap-8">
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
  ),
  argTypes: {
    ...disableAllExcept([]),
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a longer tooltip that contains more information and wraps to multiple lines when needed. The full text is visible in the tooltip even when the button label is truncated.",
    side: "top",
    sideOffset: 4,
  },
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="wui-max-w-[220px] wui-min-w-0 wui-overflow-hidden wui-text-ellipsis wui-whitespace-nowrap">
          Very long button label that will be truncated with an ellipsis
        </Button>
      </TooltipTrigger>

      <TooltipContent
        variant="default"
        className="wui-max-w-xs wui-overflow-visible wui-break-words"
        side={args.side ?? "top"}
        sideOffset={args.sideOffset ?? 4}
      >
        <p>{args.content}</p>
      </TooltipContent>
    </Tooltip>
  ),
  argTypes: {
    ...disableAllExcept(["content", "side", "sideOffset"]),
  },
};

export const WithDelay: Story = {
  args: {
    delayDuration: 500,
  },
  render: (args) => (
    <div className="wui-flex wui-gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button>Instant</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Appears instantly</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={args.delayDuration ?? 500}>
        <TooltipTrigger asChild>
          <Button>Delayed</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Appears after {args.delayDuration ?? 500}ms</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  argTypes: {
    ...disableAllExcept(["delayDuration"]),
  },
};

export const VariantsTooltip: Story = {
  render: () => (
    <div className="wui-flex wui-flex-wrap wui-gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Default</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Default button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="success">Success</Button>
        </TooltipTrigger>

        <TooltipContent variant="success">
          <p>Success button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="danger">Danger</Button>
        </TooltipTrigger>

        <TooltipContent variant="danger">
          <p>Danger button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="informative">Informative</Button>
        </TooltipTrigger>

        <TooltipContent variant="informative">
          <p>Informative button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Outline</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Outline button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Ghost</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Ghost button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="link">Link</Button>
        </TooltipTrigger>

        <TooltipContent variant="default">
          <p>Link button tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  argTypes: {
    ...disableAllExcept([]),
  },
};

export const ClickableHoverVariants: Story = {
  render: () => (
    <div className="wui-flex wui-flex-wrap wui-gap-4">
      <ButtonTooltip
        variant="ghost"
        content="Opens on click. Stays open until you click outside or press Escape."
      >
        Ghost — click for details
      </ButtonTooltip>

      <ButtonTooltip
        variant="ghost-neutral"
        content="Opens on click. Stays open until you click outside or press Escape."
      >
        Ghost neutral — click for details
      </ButtonTooltip>

      <ButtonTooltip
        variant="outline"
        content="Opens on click. Stays open until you click outside or press Escape."
      >
        Outline — click for details
      </ButtonTooltip>

      <ButtonTooltip
        variant="outline-neutral"
        content="Opens on click. Stays open until you click outside or press Escape."
      >
        Outline neutral — click for details
      </ButtonTooltip>
    </div>
  ),
  argTypes: {
    ...disableAllExcept([]),
  },
};
