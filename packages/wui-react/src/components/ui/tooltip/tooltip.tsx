import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipDelayContext = React.createContext<number | undefined>(undefined);

export interface TooltipProviderProps {
  children?: React.ReactNode;
  /** Delay before opening (ms). Aliased to Base UI's `delay`. */
  delayDuration?: number;
  /** Delay before closing (ms). */
  closeDelay?: number;
  /** Window in which adjacent tooltips open instantly (ms). */
  timeout?: number;
}

const DEFAULT_DELAY_DURATION = 300;

const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
  delayDuration = DEFAULT_DELAY_DURATION,
  closeDelay,
  timeout,
}) => (
  <TooltipPrimitive.Provider
    delay={delayDuration}
    closeDelay={closeDelay}
    timeout={timeout}
  >
    {children}
  </TooltipPrimitive.Provider>
);

type TooltipPrimitiveRootProps = React.ComponentProps<
  typeof TooltipPrimitive.Root
>;

export interface TooltipProps extends TooltipPrimitiveRootProps {
  /** Per-instance delay override (ms). Forwarded to the Trigger via context. */
  delayDuration?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  delayDuration,
  children,
  ...rootProps
}) => (
  <TooltipDelayContext.Provider value={delayDuration}>
    <TooltipPrimitive.Root {...rootProps}>{children}</TooltipPrimitive.Root>
  </TooltipDelayContext.Provider>
);

type TooltipPrimitiveTriggerProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export interface TooltipTriggerProps
  extends Omit<TooltipPrimitiveTriggerProps, "render"> {
  /** Back-compat: renders the single child element as the trigger (Radix-style). */
  asChild?: boolean;
  render?: TooltipPrimitiveTriggerProps["render"];
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ asChild, render, delay, children, ...props }, ref) => {
    const contextDelay = React.useContext(TooltipDelayContext);
    const resolvedDelay = delay ?? contextDelay;

    if (asChild && React.isValidElement(children)) {
      return (
        <TooltipPrimitive.Trigger
          ref={ref}
          delay={resolvedDelay}
          render={children as React.ReactElement}
          {...props}
        />
      );
    }

    return (
      <TooltipPrimitive.Trigger
        ref={ref}
        delay={resolvedDelay}
        render={render}
        {...props}
      >
        {children}
      </TooltipPrimitive.Trigger>
    );
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

const tooltipContentVariants = cva(
  "wui-z-50 wui-overflow-hidden wui-rounded-md wui-border wui-px-3 wui-py-1.5 wui-text-sm wui-shadow-md wui-transition-[opacity,transform] data-[starting-style]:wui-opacity-0 data-[ending-style]:wui-opacity-0 data-[starting-style]:wui-scale-95 data-[ending-style]:wui-scale-95",
  {
    variants: {
      variant: {
        default: "wui-bg-primary wui-text-primary-foreground",
        success: "wui-bg-success wui-text-success-foreground",
        danger: "wui-bg-danger wui-text-danger-foreground",
        informative: "wui-bg-informative wui-text-informative-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type Side = "top" | "right" | "bottom" | "left";

type TooltipPrimitivePopupProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Popup
>;

export interface TooltipContentExtraProps {
  /** Whether to render an arrow pointing to the trigger. */
  showArrow?: boolean;
  /** Optional className applied to the arrow element. */
  arrowClassName?: string;
  /** Side of the anchor to align against. */
  side?: Side;
  /** Distance between the trigger and the popup. */
  sideOffset?: number;
  /** className applied to the positioner wrapper. */
  positionerClassName?: string;
}

export type TooltipContentProps = Omit<TooltipPrimitivePopupProps, "side"> &
  VariantProps<typeof tooltipContentVariants> &
  TooltipContentExtraProps;

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      className,
      side = "top",
      sideOffset = 4,
      variant,
      showArrow,
      arrowClassName,
      positionerClassName,
      children,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        className={positionerClassName}
      >
        <TooltipPrimitive.Popup
          ref={ref}
          role="tooltip"
          className={cn(tooltipContentVariants({ variant }), className)}
          {...props}
        >
          {children}
          {showArrow ? (
            <TooltipPrimitive.Arrow
              className={cn("wui-fill-current", arrowClassName)}
            />
          ) : null}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
