"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { z } from "zod";

import { Button, Form, Input, Section, TextArea } from "@/components";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
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
          onSubmit={() => {
            console.log("submit");
          }}
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
              <Input
                label="Subject"
                registration={register("subject")}
                error={formState.errors["subject"]}
              />
              <TextArea
                label="Message"
                registration={register("message")}
                error={formState.errors["message"]}
              />
              <Button
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
