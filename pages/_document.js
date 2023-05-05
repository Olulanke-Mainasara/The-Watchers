import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="duration-500 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
