/**
 * Storybook utilities for consistent story configuration
 */

interface ArgTypeConfig {
  table: {
    disable: boolean;
  };
}

/**
 * Helper function to disable all argTypes except specified ones
 * @param enabledArgs - Array of arg names to keep enabled in controls
 * @param allArgs - Optional array of all possible args. If not provided, uses common props
 * @returns ArgTypes object with disabled controls
 */
export const disableAllExcept = (enabledArgs: string[], allArgs?: string[]) => {
  // Default common props that most components might have
  const defaultArgs = [
    "variant",
    "size",
    "disabled",
    "children",
    "onClick",
    "onFocus",
    "onBlur",
    "className",
    "style",
    "asChild",
  ];

  const argsToProcess = allArgs ?? defaultArgs;
  const disabled: Record<string, ArgTypeConfig> = {};

  argsToProcess.forEach((arg) => {
    if (!enabledArgs.includes(arg)) {
      disabled[arg] = {
        table: {
          disable: true,
        },
      };
    }
  });

  return disabled;
};

/**
 * Common argTypes configurations for reuse
 */
export const commonArgTypes = {
  /** Disable all interactive controls */
  disableAll: () => disableAllExcept([]),

  /** Only show content-related controls */
  contentOnly: () => disableAllExcept(["children"]),

  /** Only show variant and size controls */
  variantAndSize: () => disableAllExcept(["variant", "size", "rounded"]),

  /** Show main interactive controls */
  interactive: () =>
    disableAllExcept(["children", "variant", "size", "disabled", "rounded"]),
};
