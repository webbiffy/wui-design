import { recipe } from "@vanilla-extract/recipes";

const v = (name: string) => `hsl(var(--wui-${name}))`;
const va = (name: string, alpha: number) =>
  `hsl(var(--wui-${name}) / ${alpha})`;

export const buttonRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    whiteSpace: "nowrap",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    cursor: "pointer",
    textDecoration: "none",
    border: "none",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    selectors: {
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px ${v("background")}, 0 0 0 4px ${v("ring")}`,
      },
      "&:disabled": {
        pointerEvents: "none",
        opacity: 0.5,
      },
    },
  },

  variants: {
    variant: {
      // Filled
      default: {
        background: v("primary"),
        color: v("primary-foreground"),
        selectors: { "&:hover": { background: va("primary", 0.9) } },
      },
      success: {
        background: v("success"),
        color: v("success-foreground"),
        selectors: { "&:hover": { background: va("success", 0.9) } },
      },
      danger: {
        background: v("danger"),
        color: v("danger-foreground"),
        selectors: { "&:hover": { background: va("danger", 0.9) } },
      },
      informative: {
        background: v("informative"),
        color: v("informative-foreground"),
        selectors: { "&:hover": { background: va("informative", 0.9) } },
      },

      // Outline
      outline: {
        border: `1px solid ${v("primary")}`,
        color: v("primary"),
        background: v("background"),
        selectors: {
          "&:hover": {
            background: v("primary"),
            color: v("primary-foreground"),
          },
        },
      },
      "outline-neutral": {
        border: `1px solid ${v("input")}`,
        background: v("background"),
        selectors: {
          "&:hover": {
            background: v("neutral"),
            color: v("neutral-foreground"),
          },
        },
      },
      "outline-success": {
        border: `1px solid ${v("success")}`,
        color: v("success"),
        background: v("background"),
        selectors: {
          "&:hover": {
            background: v("success"),
            color: v("success-foreground"),
          },
        },
      },
      "outline-danger": {
        border: `1px solid ${v("danger")}`,
        color: v("danger"),
        background: v("background"),
        selectors: {
          "&:hover": {
            background: v("danger"),
            color: v("danger-foreground"),
          },
        },
      },
      "outline-informative": {
        border: `1px solid ${v("informative")}`,
        color: v("informative"),
        background: v("background"),
        selectors: {
          "&:hover": {
            background: v("informative"),
            color: v("informative-foreground"),
          },
        },
      },

      // Ghost
      ghost: {
        background: "transparent",
        color: v("primary"),
        selectors: {
          "&:hover": {
            background: v("primary"),
            color: v("primary-foreground"),
          },
        },
      },
      "ghost-neutral": {
        background: "transparent",
        color: v("foreground"),
        selectors: {
          "&:hover": {
            background: v("neutral"),
            color: v("neutral-foreground"),
          },
        },
      },
      "ghost-success": {
        background: "transparent",
        color: v("success"),
        selectors: {
          "&:hover": {
            background: v("success"),
            color: v("success-foreground"),
          },
        },
      },
      "ghost-danger": {
        background: "transparent",
        color: v("danger"),
        selectors: {
          "&:hover": {
            background: v("danger"),
            color: v("danger-foreground"),
          },
        },
      },
      "ghost-informative": {
        background: "transparent",
        color: v("informative"),
        selectors: {
          "&:hover": {
            background: v("informative"),
            color: v("informative-foreground"),
          },
        },
      },

      // Link
      link: {
        background: "transparent",
        color: v("primary"),
        textUnderlineOffset: "4px",
        height: "auto",
        padding: 0,
        selectors: { "&:hover": { textDecoration: "underline" } },
      },
      "link-neutral": {
        background: "transparent",
        color: v("foreground"),
        textUnderlineOffset: "4px",
        height: "auto",
        padding: 0,
        selectors: { "&:hover": { textDecoration: "underline" } },
      },
      "link-success": {
        background: "transparent",
        color: v("success"),
        textUnderlineOffset: "4px",
        height: "auto",
        padding: 0,
        selectors: { "&:hover": { textDecoration: "underline" } },
      },
      "link-danger": {
        background: "transparent",
        color: v("danger"),
        textUnderlineOffset: "4px",
        height: "auto",
        padding: 0,
        selectors: { "&:hover": { textDecoration: "underline" } },
      },
      "link-informative": {
        background: "transparent",
        color: v("informative"),
        textUnderlineOffset: "4px",
        height: "auto",
        padding: 0,
        selectors: { "&:hover": { textDecoration: "underline" } },
      },
    },

    size: {
      default: { height: "2.25rem", padding: "0.5rem 1rem" },
      sm: { height: "2rem", padding: "0 0.75rem" },
      lg: { height: "2.5rem", padding: "0 2rem" },
      icon: { height: "2.25rem", width: "2.25rem", padding: 0 },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariant = NonNullable<
  Parameters<typeof buttonRecipe>[0]
>["variant"];
export type ButtonSize = NonNullable<
  Parameters<typeof buttonRecipe>[0]
>["size"];
