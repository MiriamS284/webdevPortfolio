import "@/app/_styles/globals.css";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Digital Garden",
    default: "Welcome | Digital Garden",
  },
  description: "Portfolio Web - Application Development by Miriam Sparbrod",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${sourceCodePro.className} antialiased bg-primary-950 text-primary-100`}
      >
        {children}
      </body>
    </html>
  );
}
