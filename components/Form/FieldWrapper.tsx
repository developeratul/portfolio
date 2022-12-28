import clsx from "clsx";
import * as React from "react";
import type { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "className" | "children">;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;
  return (
    <div className="grid gap-2">
      <label
        className={clsx(
          "block text-sm font-medium text-background-300 dark:text-background-200",
          className
        )}
      >
        {label}
        <div className="mt-2">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
