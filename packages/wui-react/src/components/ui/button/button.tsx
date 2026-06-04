import * as React from "react";

import { buttonRecipe, type ButtonSize, type ButtonVariant } from "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[buttonRecipe({ variant, size }), className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
