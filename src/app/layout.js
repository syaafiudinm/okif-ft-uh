import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const SourceCodePro = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "OKIF FT-UH",
  description: "website resmi OKIF FT-UH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SourceCodePro.className}>{children}</body>
    </html>
  );
}
