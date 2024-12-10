import type { Metadata } from "next";
import "./globals.css";
import { MultiFormProvider } from "./context_api/useMultiFormContext";

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Multi Step Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MultiFormProvider>
        <body>{children}</body>
      </MultiFormProvider>
    </html>
  );
}
