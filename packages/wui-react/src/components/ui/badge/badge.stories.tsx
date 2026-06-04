import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeCheckIcon, Bell, Info } from "lucide-react";

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
        "default",
        "bordered-neutral",
        "bordered-success",
        "bordered-danger",
        "bordered-informative",
        "filled-primary",
        "filled-success",
        "filled-danger",
        "filled-informative",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      description: "The size of the badge",
      options: ["default", "sm", "md"],
      table: { type: { summary: "string" } },
      defaultValue: { summary: "default" },
    },
    radius: {
      control: { type: "select" },
      description: "The roundedness of the badge",
      options: ["default", "xl", "full"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the badge",
      table: { type: { summary: "ReactNode" } },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

const row: React.CSSProperties = { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" };
const column: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "1.5rem" };
const label: React.CSSProperties = { fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "hsl(var(--wui-foreground))" };
const iconSize: React.CSSProperties = { width: "1rem", height: "1rem" };

export const Default: Story = {
  args: { children: "Badge" },
  argTypes: { ...commonArgTypes.interactive() },
};

export const Variants: Story = {
  args: { size: "default" },
  render: (args) => (
    <div style={column}>
      <div>
        <h3 style={label}>Bordered</h3>
        <div style={row}>
          <Badge variant="default" size={args.size} radius={args.radius}>Default</Badge>
          <Badge variant="bordered-neutral" size={args.size} radius={args.radius}>Neutral</Badge>
          <Badge variant="bordered-success" size={args.size} radius={args.radius}>Success</Badge>
          <Badge variant="bordered-danger" size={args.size} radius={args.radius}>Danger</Badge>
          <Badge variant="bordered-informative" size={args.size} radius={args.radius}>Informative</Badge>
        </div>
      </div>

      <div>
        <h3 style={label}>Filled</h3>
        <div style={row}>
          <Badge variant="filled-primary" size={args.size} radius={args.radius}>Primary</Badge>
          <Badge variant="filled-success" size={args.size} radius={args.radius}>Success</Badge>
          <Badge variant="filled-danger" size={args.size} radius={args.radius}>Danger</Badge>
          <Badge variant="filled-informative" size={args.size} radius={args.radius}>Informative</Badge>
        </div>
      </div>
    </div>
  ),
  argTypes: { ...disableAllExcept(["size", "radius"]) },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={row}>
      <Badge size="default" variant={args.variant} radius={args.radius}>Default</Badge>
      <Badge size="sm" variant={args.variant} radius={args.radius}>Small</Badge>
      <Badge size="md" variant={args.variant} radius={args.radius}>Medium</Badge>
    </div>
  ),
  args: { variant: "default", radius: "default" },
  argTypes: { ...disableAllExcept(["variant", "radius"]) },
};

export const Radius: Story = {
  render: (args) => (
    <div style={row}>
      <Badge radius="default" variant={args.variant}>Default</Badge>
      <Badge radius="xl" variant={args.variant}>Extra Large (xl)</Badge>
      <Badge radius="full" variant={args.variant}>Full</Badge>
    </div>
  ),
  args: { variant: "default" },
  argTypes: { ...disableAllExcept(["variant"]) },
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={row}>
      <Badge variant="filled-success" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <BadgeCheckIcon style={iconSize} />
        Verified
      </Badge>

      <Badge variant="bordered-neutral" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <Bell style={{ ...iconSize, color: "hsl(var(--wui-danger))" }} />
        99+
      </Badge>

      <Badge variant="bordered-informative" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <Info style={{ ...iconSize, color: "hsl(var(--wui-informative))" }} />
        Info
      </Badge>
    </div>
  ),
  args: { size: "default", radius: "default" },
  argTypes: { ...disableAllExcept(["size", "radius"]) },
};

export const WithDot: Story = {
  render: (args) => (
    <div style={row}>
      <Badge variant="bordered-success" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <span style={{ width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "hsl(var(--wui-success))" }} />
        Success
      </Badge>
      <Badge variant="bordered-danger" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <span style={{ width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "hsl(var(--wui-danger))" }} />
        Danger
      </Badge>
      <Badge variant="bordered-informative" size={args.size} radius={args.radius} style={{ gap: "0.25rem" }}>
        <span style={{ width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "hsl(var(--wui-informative))" }} />
        Info
      </Badge>
    </div>
  ),
  args: { size: "default", radius: "default" },
  argTypes: { ...disableAllExcept(["size", "radius"]) },
};
