// src/app/layout.tsx

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { initMocks } from "@/mocks";
import { MSWComponent } from "@/providers/MSWComponent";

initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWComponent>
          <QueryProvider>{children}</QueryProvider>
        </MSWComponent>
      </body>
    </html>
  );
}
