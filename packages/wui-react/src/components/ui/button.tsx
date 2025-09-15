import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "wui-inline-flex wui-items-center wui-justify-center wui-font-medium wui-whitespace-nowrap wui-rounded-md wui-text-sm wui-ring-offset-background wui-transition-colors focus-visible:wui-outline-none focus-visible:wui-ring-2 focus-visible:wui-ring-ring focus-visible:wui-ring-offset-2 disabled:wui-pointer-events-none disabled:wui-opacity-50",
  {
    variants: {
      variant: {
        // Filled
        default:
          "wui-bg-primary wui-text-primary-foreground hover:wui-bg-primary/90",
        success:
          "wui-bg-success wui-text-success-foreground hover:wui-bg-success/90",
        danger:
          "wui-bg-danger wui-text-danger-foreground hover:wui-bg-danger/90",
        informative:
          "wui-bg-informative wui-text-informative-foreground hover:wui-bg-informative/90",

        // Outline
        outline:
          "wui-border wui-border-primary wui-text-primary wui-bg-background hover:wui-bg-primary hover:wui-text-primary-foreground",
        "outline-neutral":
          "wui-border wui-border-input wui-bg-background hover:wui-bg-neutral hover:wui-text-neutral-foreground",
        "outline-success":
          "wui-border wui-border-success wui-text-success wui-bg-background hover:wui-bg-success hover:wui-text-success-foreground",
        "outline-danger":
          "wui-border wui-border-danger wui-text-danger wui-bg-background hover:wui-bg-danger hover:wui-text-danger-foreground",
        "outline-informative":
          "wui-border wui-border-informative wui-text-informative wui-bg-background hover:wui-bg-informative hover:wui-text-informative-foreground",

        // Ghost
        ghost:
          "wui-text-primary hover:wui-bg-primary hover:wui-text-primary-foreground",
        "ghost-neutral":
          "wui-text-foreground hover:wui-bg-neutral hover:wui-text-neutral-foreground",
        "ghost-success":
          "wui-text-success hover:wui-bg-success hover:wui-text-success-foreground",
        "ghost-danger":
          "wui-text-danger hover:wui-bg-danger hover:wui-text-danger-foreground",
        "ghost-informative":
          "wui-text-informative hover:wui-bg-informative hover:wui-text-informative-foreground",

        // Link
        link: "wui-text-primary wui-underline-offset-4 wui-h-auto wui-p-0 hover:wui-underline",
        "link-neutral":
          "wui-text-foreground wui-underline-offset-4 wui-p-0 wui-h-auto hover:wui-underline",
        "link-success":
          "wui-text-success wui-underline-offset-4 wui-p-0 wui-h-auto hover:wui-underline",
        "link-danger":
          "wui-text-danger wui-underline-offset-4 wui-p-0 wui-h-auto hover:wui-underline",
        "link-informative":
          "wui-text-informative wui-underline-offset-4 wui-p-0 wui-h-auto hover:wui-underline",
      },
      size: {
        default: "wui-h-9 wui-px-4 wui-py-2",
        sm: "wui-h-8 wui-rounded-md wui-px-3",
        lg: "wui-h-10 wui-rounded-md wui-px-8",
        icon: "wui-h-9 wui-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
