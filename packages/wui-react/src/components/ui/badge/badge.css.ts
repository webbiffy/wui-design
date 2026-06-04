import { recipe } from "@vanilla-extract/recipes";

const v = (name: string) => `hsl(var(--wui-${name}))`;
const va = (name: string, alpha: number) =>
  `hsl(var(--wui-${name}) / ${alpha})`;

export const badgeRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    whiteSpace: "nowrap",
    flexShrink: 0,
    gap: "0.25rem",
    border: "1px solid",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    selectors: {
      "&:focus-visible": {
        borderColor: v("ring"),
        boxShadow: `0 0 0 3px ${va("ring", 0.5)}`,
      },
      '&[aria-invalid="true"]': {
        borderColor: v("danger"),
        boxShadow: `0 0 0 3px ${va("danger", 0.2)}`,
      },
    },
  },

  variants: {
    variant: {
      // Bordered
      default: {
        borderColor: v("primary"),
        background: va("primary", 0.15),
        color: v("primary"),
        selectors: { "a&:hover": { background: va("primary", 0.3) } },
      },
      "bordered-neutral": {
        borderColor: v("input"),
        background: va("neutral", 0.15),
        color: v("foreground"),
        selectors: { "a&:hover": { background: va("neutral", 0.3) } },
      },
      "bordered-success": {
        borderColor: v("success"),
        background: va("success", 0.15),
        color: v("success"),
        selectors: { "a&:hover": { background: va("success", 0.3) } },
      },
      "bordered-danger": {
        borderColor: v("danger"),
        background: va("danger", 0.15),
        color: v("danger"),
        selectors: { "a&:hover": { background: va("danger", 0.3) } },
      },
      "bordered-informative": {
        borderColor: v("informative"),
        background: va("informative", 0.15),
        color: v("informative"),
        selectors: { "a&:hover": { background: va("informative", 0.3) } },
      },

      // Filled
      "filled-primary": {
        borderColor: "transparent",
        background: v("primary"),
        color: v("primary-foreground"),
        selectors: { "a&:hover": { background: va("primary", 0.9) } },
      },
      "filled-success": {
        borderColor: "transparent",
        background: v("success"),
        color: v("success-foreground"),
        selectors: { "a&:hover": { background: va("success", 0.9) } },
      },
      "filled-danger": {
        borderColor: "transparent",
        background: v("danger"),
        color: v("danger-foreground"),
        selectors: { "a&:hover": { background: va("danger", 0.9) } },
      },
      "filled-informative": {
        borderColor: "transparent",
        background: v("informative"),
        color: v("informative-foreground"),
        selectors: { "a&:hover": { background: va("informative", 0.9) } },
      },
    },

    size: {
      default: { fontSize: "0.75rem", padding: "0.125rem 0.5rem" },
      sm: { fontSize: "0.875rem", padding: "0.125rem 0.625rem" },
      md: { fontSize: "1rem", padding: "0.25rem 0.625rem" },
    },

    radius: {
      default: { borderRadius: "0.375rem" },
      xl: { borderRadius: "0.75rem" },
      full: {
        borderRadius: "9999px",
        minHeight: "1.25rem",
        minWidth: "1.25rem",
        aspectRatio: "1",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
    radius: "default",
  },
});

export type BadgeVariant = NonNullable<
  Parameters<typeof badgeRecipe>[0]
>["variant"];
export type BadgeSize = NonNullable<Parameters<typeof badgeRecipe>[0]>["size"];
export type BadgeRadius = NonNullable<
  Parameters<typeof badgeRecipe>[0]
>["radius"];
