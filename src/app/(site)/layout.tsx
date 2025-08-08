import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "../globals.css";


// COMPONENTS
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const bebasT = Bebas_Neue({
  variable: "--font-bebas-mono",
  subsets: ["latin"],
   weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Superior Granite",
  description: "Marble and Granite Supplier",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasT.variable} ${poppins.variable}  antialiased`}
      >
      <Header/>
      <PageTransition>
          {children}
        <Footer/>
      </PageTransition>
      
      </body>
    </html>
  );
}
