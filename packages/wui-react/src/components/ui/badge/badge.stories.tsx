import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeCheckIcon, Bell } from "lucide-react";

import { disableAllExcept, commonArgTypes } from "@/lib/storybook-utils";

import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      description: "The visual style variant of the badge",
      options: [
        // Outline
        "default",
        "bordered-neutral",
        "bordered-success",
        "bordered-danger",
        // Filled
        "filled-primary",
        "filled-success",
        "filled-danger",
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
      description: "The size of the badge",
      options: ["default", "sm", "md"],
      table: {
        type: {
          summary: "string",
        },
      },
      defaultValue: {
        summary: "default",
      },
    },
    radius: {
      control: { type: "select" },
      description: "The roundedness of the badge",
      options: ["default", "xl", "full"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "default",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the badge",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

// Single variant stories for documentation
export const Default: Story = {
  args: {
    children: "Badge",
  },
  argTypes: {
    ...commonArgTypes.interactive(),
  },
};

// All Variants
export const Variants: Story = {
  args: {
    size: "default",
  },
  render: (args) => {
    return (
      <div className="wui-space-y-6">
        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Bordered
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2 wui-items-center">
            <Badge variant="default" size={args.size} radius={args.radius}>
              Default
            </Badge>
            <Badge
              variant="bordered-neutral"
              size={args.size}
              radius={args.radius}
            >
              Neutral
            </Badge>
            <Badge
              variant="bordered-success"
              size={args.size}
              radius={args.radius}
            >
              Success
            </Badge>
            <Badge
              variant="bordered-danger"
              size={args.size}
              radius={args.radius}
            >
              Danger
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="wui-text-sm wui-font-medium wui-text-foreground wui-mb-2">
            Filled
          </h3>
          <div className="wui-flex wui-flex-wrap wui-gap-2 wui-items-center">
            <Badge
              variant="filled-primary"
              size={args.size}
              radius={args.radius}
            >
              Primary
            </Badge>
            <Badge
              variant="filled-success"
              size={args.size}
              radius={args.radius}
            >
              Success
            </Badge>
            <Badge
              variant="filled-danger"
              size={args.size}
              radius={args.radius}
            >
              Danger
            </Badge>
          </div>
        </div>
      </div>
    );
  },
  argTypes: {
    ...disableAllExcept(["size", "radius"]),
  },
};

// All Sizes
export const Sizes: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Badge size="default" variant={args.variant} radius={args.radius}>
        Default
      </Badge>
      <Badge size="sm" variant={args.variant} radius={args.radius}>
        Small
      </Badge>
      <Badge size="md" variant={args.variant} radius={args.radius}>
        Medium
      </Badge>
    </div>
  ),
  args: {
    variant: "default",
    radius: "default",
  },
  argTypes: {
    ...disableAllExcept(["variant", "radius"]),
  },
};

// All Radius
export const Radius: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Badge radius="default" variant={args.variant}>
        Default
      </Badge>
      <Badge radius="xl" variant={args.variant}>
        Extra Large (xl)
      </Badge>
      <Badge radius="full" variant={args.variant}>
        Full
      </Badge>
    </div>
  ),
  args: {
    variant: "default",
  },
  argTypes: {
    ...disableAllExcept(["variant"]),
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Badge
        variant="filled-success"
        size={args.size}
        radius={args.radius}
        className="wui-gap-1"
      >
        <BadgeCheckIcon />
        Verified
      </Badge>

      <Badge
        variant="bordered-neutral"
        size={args.size}
        radius={args.radius}
        className="wui-gap-1"
      >
        <Bell className="wui-size-4 wui-text-danger" />
        99+
      </Badge>
    </div>
  ),
  args: {
    size: "default",
    radius: "default",
  },
  argTypes: {
    ...disableAllExcept(["size", "radius"]),
  },
};

export const WithDot: Story = {
  render: (args) => (
    <div className="wui-flex wui-flex-wrap wui-items-center wui-gap-4">
      <Badge
        variant="bordered-success"
        size={args.size}
        radius={args.radius}
        className="wui-gap-1"
      >
        <span className="wui-h-1 wui-w-1 wui-rounded-full wui-bg-success" />
        Success
      </Badge>
      <Badge
        variant="bordered-danger"
        size={args.size}
        radius={args.radius}
        className="wui-gap-1"
      >
        <span className="wui-h-1 wui-w-1 wui-rounded-full wui-bg-danger" />
        Danger
      </Badge>
    </div>
  ),
  args: {
    size: "default",
    radius: "default",
  },
  argTypes: {
    ...disableAllExcept(["size", "radius"]),
  },
};
