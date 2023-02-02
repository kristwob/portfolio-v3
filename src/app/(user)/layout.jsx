import "../global.css";
import { Inter, Squada_One, Source_Code_Pro } from "@next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const squada_one = Squada_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${squada_one.variable} ${source_code_pro.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-purple">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
