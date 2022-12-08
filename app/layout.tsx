import { AppProps } from "@/types";
import "../styles/globals.css";

export default function RootLayout(props: AppProps) {
  const { children } = props;
  return (
    <div>
      <h1>Layout</h1>
      <div>{children}</div>
    </div>
  );
}
