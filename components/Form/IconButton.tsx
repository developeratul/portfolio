import clsx from "clsx";
import React from "react";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactElement;
  isRounded?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, isRounded = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={clsx(
          className,
          "box-border inline-flex items-center justify-center !p-2.5 text-center align-middle !text-sm",
          isRounded && "rounded-full"
        )}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
