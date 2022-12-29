"use client";
import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { Button, Form, Input, Section, TextArea, type SubmitFn } from "@/components";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z.string().email().trim(),
  message: z.string().min(10, "Your message is too short").trim(),
});

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [isProcessing, setProcessing] = React.useState(false);

  const handleSubmit: SubmitFn<ContactValues> = async (values, reset) => {
    setProcessing(true);
    try {
      const { name, email, message } = values;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: name,
          to_name: process.env.NEXT_PUBLIC_EMAIL_NAME,
          message,
          reply_to: email,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      reset();
      toast.success("Your message want sent. You will hear back from me within a business day.");
    } catch (err: any) {
      toast.error(err?.message || err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Section no="05" title="Contact">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row-reverse lg:justify-between">
        <Image
          width={250}
          height={250}
          src="/contact.svg"
          alt="Contact illustration"
          className="w-full max-w-md"
        />

        <Form<ContactValues, typeof schema>
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex-1"
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <Input
                label="Name"
                registration={register("name")}
                error={formState.errors["name"]}
              />
              <Input
                type="email"
                label="Email"
                registration={register("email")}
                error={formState.errors["email"]}
              />
              <TextArea
                label="Message"
                registration={register("message")}
                error={formState.errors["message"]}
              />
              <Button
                isLoading={isProcessing}
                startIcon={<PaperAirplaneIcon width={18} height={18} />}
                className="w-full"
                color="primary"
                type="submit"
              >
                Send
              </Button>
            </>
          )}
        </Form>
      </div>
    </Section>
  );
}
