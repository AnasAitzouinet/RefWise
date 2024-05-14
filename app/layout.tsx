import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "RefWise - Referring someone shouldn’t be a hassle",
  description: "RefWise helps you earn amazing rewards by simply referring friends. Sign up now and start benefiting from our unique referral program.",
  // Add more relevant metadata below
  openGraph: {
'images': ['./logo.png'],
  },
  keywords: "RefWise, referral rewards, friend referral, earn rewards, best referral program, rewards program, referral bonus, refer and earn, loyalty program, referral system, referral incentive, reward platform",
  authors: [{ name: "RefWise" ,url: "https://www.refwise.co"}],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
