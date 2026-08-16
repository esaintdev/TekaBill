import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nigerian Bill Payment Platform",
  description: "TekaBill — simple, secure payments for Nigeria.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
