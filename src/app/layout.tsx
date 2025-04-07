import type { Metadata } from "next";
import "@/assets/styles/globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode='dark'  dir='ltr' >
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css"></link>
      </head>
      <body className="ltr: rt: ">
        {children}
      </body>
    </html>
  );
}
