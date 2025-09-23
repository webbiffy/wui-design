import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "wui-inline-flex wui-items-center wui-justify-center wui-border wui-w-fit wui-whitespace-nowrap wui-shrink-0 [&>svg]:wui-size-3 wui-gap-1 [&>svg]:wui-pointer-events-none focus-visible:wui-border-ring focus-visible:wui-ring-ring/50 focus-visible:wui-ring-[3px] aria-invalid:wui-ring-destructive/20 dark:aria-invalid:wui-ring-destructive/40 aria-invalid:wui-border-destructive wui-transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        // Outline
        default:
          "wui-border-primary wui-bg-primary/15 wui-text-primary [a&]:hover:wui-bg-primary/30",
        "bordered-neutral":
          "wui-border-input wui-bg-neutral/15 wui-text-foreground [a&]:hover:wui-bg-neutral/30",
        "bordered-success":
          "wui-border-success wui-bg-success/15 wui-text-success [a&]:hover:wui-bg-success/30",
        "bordered-danger":
          "wui-border-danger wui-bg-danger/15 wui-text-danger [a&]:hover:wui-bg-danger/30",
        "bordered-informative":
          "wui-border-informative wui-bg-informative/15 wui-text-informative [a&]:hover:wui-bg-informative/30",

        // Filled
        "filled-primary":
          "wui-border-transparent wui-bg-primary wui-text-primary-foreground [a&]:hover:wui-bg-primary/90",
        "filled-success":
          "wui-border-transparent wui-bg-success wui-text-success-foreground [a&]:hover:wui-bg-success/90",
        "filled-danger":
          "wui-border-transparent wui-bg-danger wui-text-danger-foreground [a&]:hover:wui-bg-danger/90",
        "filled-informative":
         "wui-border-transparent wui-bg-informative wui-text-informative-foreground [a&]:hover:wui-bg-informative/90",
      },
      size: {
        default: "wui-text-xs wui-py-0.5 wui-px-2",
        sm: "wui-text-sm wui-py-0.5 wui-px-2.5",
        md: "wui-text-base wui-py-1 wui-px-2.5",
      },
      radius: {
        default: "wui-rounded-md",
        xl: "wui-rounded-xl",
        full: "wui-rounded-full wui-min-h-5 wui-min-w-5 wui-aspect-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
