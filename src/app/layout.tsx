import type { Metadata } from "next";
import localFont from "next/font/local";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebarcomponent";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Debojeet Karmakar",
  description: "This website serves as my portfolio, showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col w-full">
            <div className = ' p-4 md:hidden'>
              <SidebarTrigger className="-ml-1" />
            </div>
            <SidebarInset>{children}</SidebarInset>
          </div>
        </SidebarProvider>  
      </body>
    </html>
  );
}
// ⌘