import * as React from "react";

import {
  badgeRecipe,
  type BadgeRadius,
  type BadgeSize,
  type BadgeVariant,
} from "./badge.css";

export interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: BadgeRadius;
}

function Badge({ className, variant, size, radius, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={[badgeRecipe({ variant, size, radius }), className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export { Badge };
