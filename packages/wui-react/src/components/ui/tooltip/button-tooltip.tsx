import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "../button/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export type ButtonTooltipButtonVariant =
  | "ghost"
  | "ghost-neutral"
  | "ghost-success"
  | "ghost-danger"
  | "ghost-informative"
  | "outline"
  | "outline-neutral"
  | "outline-success"
  | "outline-danger"
  | "outline-informative";

export interface ButtonTooltipProps
  extends React.PropsWithChildren<{
    content: string | React.ReactNode;
    className?: string;
    contentClassName?: string;
    /** Button variant for click-to-open tooltip. Omit for ghost-neutral. */
    variant?: ButtonTooltipButtonVariant;
  }> {}

export const ButtonTooltip: React.FC<ButtonTooltipProps> = ({
  content,
  children,
  className,
  contentClassName,
  variant = "ghost-neutral",
}) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [open]);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <Button
            ref={buttonRef}
            variant={variant}
            className={cn("wui-cursor-pointer", className)}
            onClick={handleClick}
            onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpen(true);
              } else if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
              }
            }}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className={cn(!content ? "wui-hidden" : "", contentClassName)}
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonTooltip;

