import { memo, useMemo, useRef } from "react";

import { useIsTruncated } from "@/hooks/use-is-truncated";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const LINE_CLAMP_MAP: Record<number, string> = {
  1: "wui-line-clamp-1",
  2: "wui-line-clamp-2",
  3: "wui-line-clamp-3",
  4: "wui-line-clamp-4",
  5: "wui-line-clamp-5",
  6: "wui-line-clamp-6",
} as const;

export interface TextTooltipProps {
  text: string;
  numberOfLines?: number;
  triggerClassName?: string;
  className?: string;
  capitalize?: boolean;
}

export const TextTooltip = memo(
  ({
    text,
    numberOfLines = 1,
    triggerClassName,
    className,
    capitalize = false,
  }: TextTooltipProps) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const isTruncated = useIsTruncated(textRef, [text, numberOfLines]);

    const lineClampClass = LINE_CLAMP_MAP[numberOfLines] ?? "wui-line-clamp-1";

    const content = useMemo(
      () => (
        <p
          ref={textRef}
          className={cn(
            "wui-text-sm wui-text-foreground wui-break-all wui-whitespace-normal",
            triggerClassName,
            lineClampClass,
            capitalize && "wui-capitalize"
          )}
        >
          {capitalize ? text.toLowerCase() : text}
        </p>
      ),
      [text, triggerClassName, lineClampClass, capitalize]
    );

    if (!isTruncated) {
      return content;
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent showArrow>
            <div className="wui-flex wui-flex-col wui-gap-2 wui-max-w-[320px]">
              <p
                className={cn(
                  "wui-text-sm",
                  className,
                  capitalize && "wui-capitalize"
                )}
              >
                {capitalize ? text.toLowerCase() : text}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

TextTooltip.displayName = "TextTooltip";

export default TextTooltip;

