"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import * as React from "react";
import type { FieldValues, UseFormProps, UseFormReset, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ZodType, ZodTypeDef } from "zod";

export type SubmitFn<TFormValues extends FieldValues> = (
  values: TFormValues,
  reset: UseFormReset<TFormValues>
) => void;

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitFn<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) });
  return (
    <form
      className={clsx("space-y-6", className)}
      onSubmit={methods.handleSubmit((values) => {
        onSubmit(values, methods.reset);
      })}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
