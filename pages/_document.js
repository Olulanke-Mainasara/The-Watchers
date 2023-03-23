import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="dark:bg-black duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
