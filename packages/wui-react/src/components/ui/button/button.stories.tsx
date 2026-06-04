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
    variant: {
      control: { type: "select" },
      description: "The visual style variant of the button",
      options: [
        "default",
        "success",
        "danger",
        "informative",
        "outline",
        "outline-neutral",
        "outline-success",
        "outline-danger",
        "outline-informative",
        "ghost",
        "ghost-neutral",
        "ghost-success",
        "ghost-danger",
        "ghost-informative",
        "link",
        "link-neutral",
        "link-success",
        "link-danger",
        "link-informative",
      ],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      description: "The size of the button",
      options: ["default", "sm", "lg", "icon"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
      table: { type: { summary: "ReactNode" } },
    },
  },
  args: { onClick: fn() },
};

type Story = StoryObj<typeof meta>;

export default meta;

const row: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: "0.5rem" };
const column: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "1.5rem" };
const label: React.CSSProperties = { fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "hsl(var(--wui-foreground))" };
const iconSize: React.CSSProperties = { width: "1rem", height: "1rem" };

export const Default: Story = {
  args: { children: "Button" },
  argTypes: { ...commonArgTypes.interactive() },
};

export const Variants: Story = {
  args: { size: "default", disabled: false },
  render: (args) => {
    const isIconSize = args.size === "icon";
    return (
      <div style={column}>
        <div>
          <h3 style={label}>Filled</h3>
          <div style={row}>
            <Button variant="default" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Default"}</Button>
            <Button variant="success" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Success"}</Button>
            <Button variant="danger" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Danger"}</Button>
            <Button variant="informative" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Informative"}</Button>
          </div>
        </div>

        <div>
          <h3 style={label}>Outline</h3>
          <div style={row}>
            <Button variant="outline" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Outline"}</Button>
            <Button variant="outline-neutral" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Outline Neutral"}</Button>
            <Button variant="outline-success" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Outline Success"}</Button>
            <Button variant="outline-danger" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Outline Danger"}</Button>
            <Button variant="outline-informative" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Outline Informative"}</Button>
          </div>
        </div>

        <div>
          <h3 style={label}>Ghost</h3>
          <div style={row}>
            <Button variant="ghost" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Ghost"}</Button>
            <Button variant="ghost-neutral" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Ghost Neutral"}</Button>
            <Button variant="ghost-success" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Ghost Success"}</Button>
            <Button variant="ghost-danger" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Ghost Danger"}</Button>
            <Button variant="ghost-informative" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Ghost Informative"}</Button>
          </div>
        </div>

        <div>
          <h3 style={label}>Link</h3>
          <div style={row}>
            <Button variant="link" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Link"}</Button>
            <Button variant="link-neutral" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Link Neutral"}</Button>
            <Button variant="link-success" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Link Success"}</Button>
            <Button variant="link-danger" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Link Danger"}</Button>
            <Button variant="link-informative" size={args.size} disabled={args.disabled}>{isIconSize ? <Download /> : "Link Informative"}</Button>
          </div>
        </div>
      </div>
    );
  },
  argTypes: { ...disableAllExcept(["size", "disabled"]) },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
      <Button size="sm" disabled={args.disabled} variant={args.variant}>Small</Button>
      <Button size="default" disabled={args.disabled} variant={args.variant}>Default</Button>
      <Button size="lg" disabled={args.disabled} variant={args.variant}>Large</Button>
      <Button size="icon" disabled={args.disabled} variant={args.variant}><Download /></Button>
    </div>
  ),
  args: { variant: "default", disabled: false },
  argTypes: { ...disableAllExcept(["variant", "disabled"]) },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
      <Button size={args.size} variant={args.variant}>
        {args.size !== "icon" && "Normal"}
        {args.size === "icon" && <Download />}
      </Button>

      <Button disabled size={args.size} variant={args.variant}>
        {args.size !== "icon" && "Disabled"}
        {args.size === "icon" && <Download />}
      </Button>

      <Button disabled size={args.size} variant={args.variant} style={{ gap: "0.25rem" }}>
        <Loader2Icon style={iconSize} />
        {args.size !== "icon" && "Loading"}
      </Button>
    </div>
  ),
  args: { variant: "default", size: "default" },
  argTypes: { ...commonArgTypes.variantAndSize() },
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
      <Button size={args.size} style={{ gap: "0.25rem" }}>
        <Plus style={iconSize} />
        {args.size !== "icon" && "Create"}
      </Button>

      <Button size={args.size} variant="danger" style={{ gap: "0.25rem" }}>
        <Trash style={iconSize} />
        {args.size !== "icon" && "Delete"}
      </Button>

      <Button size={args.size} variant="success" style={{ gap: "0.25rem" }}>
        <Download style={iconSize} />
        {args.size !== "icon" && "Download"}
      </Button>
    </div>
  ),
  args: { size: "default" },
  argTypes: { ...disableAllExcept(["size"]) },
};
