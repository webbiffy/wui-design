import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltipContentVariants = cva(
  "wui-z-50 wui-overflow-hidden wui-rounded-md wui-border wui-px-3 wui-py-1.5 wui-text-sm wui-shadow-md wui-transition-colors wui-animate-in wui-fade-in-0 wui-zoom-in-95 data-[state=closed]:wui-animate-out data-[state=closed]:wui-fade-out-0 data-[state=closed]:wui-zoom-out-95 data-[side=bottom]:wui-slide-in-from-top-2 data-[side=left]:wui-slide-in-from-right-2 data-[side=right]:wui-slide-in-from-left-2 data-[side=top]:wui-slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default:
          "wui-bg-primary wui-text-primary-foreground",
        success:
          "wui-bg-success wui-text-success-foreground",
        danger:
          "wui-bg-danger wui-text-danger-foreground",
        informative:
          "wui-bg-informative wui-text-informative-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TooltipPrimitiveContentProps =
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

export interface TooltipContentExtraProps {
  /**
   * Whether to render an arrow pointing to the trigger.
   */
  showArrow?: boolean;
  /**
   * Optional className applied to the arrow element.
   */
  arrowClassName?: string;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipPrimitiveContentProps &
    VariantProps<typeof tooltipContentVariants> &
    TooltipContentExtraProps
>(
  (
    {
      className,
      sideOffset = 4,
      variant,
      showArrow,
      arrowClassName,
      children,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ variant }), className)}
      {...props}
    >
      {children}
      {showArrow ? (
        <TooltipPrimitive.Arrow
          className={cn("wui-fill-current", arrowClassName)}
        />
      ) : null}
    </TooltipPrimitive.Content>
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export type TooltipProps =
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;
export type TooltipContentProps = TooltipPrimitiveContentProps &
  VariantProps<typeof tooltipContentVariants> &
  TooltipContentExtraProps;
export type TooltipTriggerProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;
export type TooltipProviderProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
