import type { Metadata } from "next";
// To try another typeface, change the family imported on this line.
import { Jost as SiteFont } from "next/font/google";
import Link from "next/link";
import { getPage } from "@/lib/content";
import { site } from "@/lib/site";
import "./globals.css";

const font = SiteFont({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const { name } = site;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: name, template: `%s | ${name}` },
  description: getPage("statement.md").description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <header className="site-header">
          <Link href="/" className="site-name">
            {name}
          </Link>
          <nav>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">© {name}</footer>
      </body>
    </html>
  );
}
