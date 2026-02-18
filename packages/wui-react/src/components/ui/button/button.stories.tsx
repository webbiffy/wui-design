import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download, Loader2Icon, Plus, Trash } from "lucide-react";
import { fn } from "storybook/test";

import { disableAllExcept, commonArgTypes } from "@/lib/storybook-utils";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    render: {
      control: false,
      description:
        "The custom element to render. <br /> Example: `<a href='/test' aria-label='Link Button' />`",
      table: {
        type: {
          summary: "ReactElement",
        },
      },
    },
    variant: {
      control: { type: "select" },
      description: "The visual style variant of the button",
      options: [
        // Filled
        "default",
        "success",
        "danger",
        "informative",

        // Outline
        "outline",
        "outline-neutral",
        "outline-success",
        "outline-danger",
        "outline-informative",

        // Ghost
        "ghost",
        "ghost-neutral",
        "ghost-success",
        "ghost-danger",
        "ghost-informative",

        // Link
        "link",
        "link-neutral",
        "link-success",
        "link-danger",
        "link-informative",
      ],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "default",
        },
      },
    },
    size: {
      control: { type: "select" },
      description: "The size of the button",
      options: ["default", "sm", "lg", "icon"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "default",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: { onClick: fn() },
};

type Story = StoryObj<typeof meta>;

export default meta;

// Single variant stories for documentation
export const Default: Story = {
  args: {
    children: "Button",
  },
  argTypes: {
    ...commonArgTypes.interactive(),
  },
};

// All Variants
export const Variants: Story = {
  args: {
    size: "default",
    disabled: false,
  },
  render: (args) => {
    const isIconSize = args.size === "icon";

    return (
      <div className="wui-space-y-6">
        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Filled
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2">
            <Button variant="default" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Default"}
            </Button>
            <Button variant="success" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Success"}
            </Button>
            <Button variant="danger" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Danger"}
            </Button>
            <Button
              variant="informative"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Informative"}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Outline
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2">
            <Button variant="outline" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Outline"}
            </Button>
            <Button
              variant="outline-neutral"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Outline Neutral"}
            </Button>
            <Button
              variant="outline-success"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Outline Success"}
            </Button>
            <Button
              variant="outline-danger"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Outline Danger"}
            </Button>
            <Button
              variant="outline-informative"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Outline Informative"}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Ghost
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2">
            <Button variant="ghost" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Ghost"}
            </Button>
            <Button
              variant="ghost-neutral"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Ghost Neutral"}
            </Button>
            <Button
              variant="ghost-success"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Ghost Success"}
            </Button>
            <Button
              variant="ghost-danger"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Ghost Danger"}
            </Button>
            <Button
              variant="ghost-informative"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Ghost Informative"}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Link
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2">
            <Button variant="link" size={args.size} disabled={args.disabled}>
              {isIconSize ? <Download /> : "Link"}
            </Button>
            <Button
              variant="link-neutral"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Link Neutral"}
            </Button>
            <Button
              variant="link-success"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Link Success"}
            </Button>
            <Button
              variant="link-danger"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Link Danger"}
            </Button>
            <Button
              variant="link-informative"
              size={args.size}
              disabled={args.disabled}
            >
              {isIconSize ? <Download /> : "Link Informative"}
            </Button>
          </div>
        </div>
      </div>
    );
  },
  argTypes: {
    ...disableAllExcept(["size", "disabled"]),
  },
};

// All Sizes
export const Sizes: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Button size="sm" disabled={args.disabled} variant={args.variant}>
        Small
      </Button>
      <Button size="default" disabled={args.disabled} variant={args.variant}>
        Default
      </Button>
      <Button size="lg" disabled={args.disabled} variant={args.variant}>
        Large
      </Button>
      <Button size="icon" disabled={args.disabled} variant={args.variant}>
        <Download />
      </Button>
    </div>
  ),
  args: {
    variant: "default",
    disabled: false,
  },
  argTypes: {
    ...disableAllExcept(["variant", "disabled"]),
  },
};

// States
export const States: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Button size={args.size} variant={args.variant}>
        {args.size !== "icon" && "Normal"}
        {args.size === "icon" && <Download />}
      </Button>

      <Button disabled size={args.size} variant={args.variant}>
        {args.size !== "icon" && "Disabled"}
        {args.size === "icon" && <Download />}
      </Button>

      <Button
        disabled
        size={args.size}
        variant={args.variant}
        className="wui-gap-1"
      >
        <Loader2Icon className="wui-animate-spin wui-size-4" />
        {args.size !== "icon" && "Loading"}
      </Button>
    </div>
  ),
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    ...commonArgTypes.variantAndSize(),
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Button size={args.size} className="wui-gap-1">
        <Plus className="wui-size-4" />
        {args.size !== "icon" && "Create"}
      </Button>

      <Button size={args.size} variant="danger" className="wui-gap-1">
        <Trash className="wui-size-4" />
        {args.size !== "icon" && "Delete"}
      </Button>

      <Button size={args.size} variant="success" className="wui-gap-1">
        <Download className="wui-size-4" />
        {args.size !== "icon" && "Download"}
      </Button>
    </div>
  ),
  args: {
    size: "default",
  },
  argTypes: {
    ...disableAllExcept(["size"]),
  },
};
