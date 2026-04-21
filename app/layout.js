import { Montserrat, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"]
});

export const metadata = {
  title: {
    default: "SEMINOLE favourites | Pizza, Pasta, Shrimp & More",
    template: "%s | SEMINOLE favourites"
  },
  description:
    "SEMINOLE favourites with a simpler category-first restaurant browsing experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className={`${poppins.className} bg-brand-cream font-body text-brand-black antialiased`}>
        <div className="min-h-screen">
          <Navbar />
          <SocialRail />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
