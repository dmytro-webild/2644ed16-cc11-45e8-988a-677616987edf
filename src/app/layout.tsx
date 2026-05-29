import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Oscar\'s Trash Bin Cleaning - Fresh & Clean Bins',
  description: 'Professional and eco-friendly trash bin cleaning services for homes in [Your City]. Remove odors, bacteria, and pests with Oscar\'s.',
  keywords: ["trash bin cleaning, garbage can cleaning, sanitation, eco-friendly, odor removal, pest control, power washing, residential cleaning, local service"],
  openGraph: {
    "title": "Oscar's Trash Bin Cleaning - Keep Your Bins Fresh",
    "description": "Professional and eco-friendly trash bin cleaning services for homes in [Your City]. Remove odors, bacteria, and pests with Oscar's.",
    "url": "https://www.oscarstrashbincleaning.com",
    "siteName": "Oscar's Trash Bin Cleaning",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/children-collects-garbage-garbage-bags-park_1157-26987.jpg",
        "alt": "Clean trash bin with water splash"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Oscar's Trash Bin Cleaning - Keep Your Bins Fresh",
    "description": "Professional and eco-friendly trash bin cleaning services for homes in [Your City]. Remove odors, bacteria, and pests with Oscar's.",
    "images": [
      "http://img.b2bpic.net/free-photo/children-collects-garbage-garbage-bags-park_1157-26987.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
