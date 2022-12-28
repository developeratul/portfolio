export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_EMAIL_SERVICE_ID: string;
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAIL_PUBLIC_KEY: string;
      NEXT_PUBLIC_EMAIL_NAME: string;
    }
  }
}
