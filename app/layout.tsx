import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Abandoned Checkout Profit Leak Detector",
  description: "Find hidden revenue in abandoned Shopify checkouts. Analyze profit leaks by product, traffic source, and checkout step."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4729efeb-8d39-442b-99dc-7a4c70d30ab4"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
