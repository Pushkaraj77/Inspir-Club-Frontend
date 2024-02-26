import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import { StoreProvider } from "@/redux/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Inspir.club",
  description: "Boost your social media presence with best influencers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>
          <main className="bg-black text-white">
            {children}
            <Footer />
            <Toaster />
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
