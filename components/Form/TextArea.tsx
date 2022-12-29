import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

import type { FieldWrapperPassThroughProps } from "./FieldWrapper";
import { FieldWrapper } from "./FieldWrapper";

type TextAreaProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextArea = (props: TextAreaProps) => {
  const { label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        rows={5}
        className={clsx(
          "block w-full rounded-md border-none bg-background-50 py-3 px-4 text-black ring-primary-600 placeholder:text-background-200 focus:bg-white focus:ring-2 dark:bg-background-400 dark:text-white dark:ring-primary-500 dark:focus:bg-background-500",
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
