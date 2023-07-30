import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Softver ",
  description: "Form softver",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = `${inter.className}  bg-[#2196F3]`;

  return (
    <html lang="en">
      <body className={styles}>
        {/* <div className="fixed w-full flex items-center justify-center ">
          <img
            src="/watermark.svg"
            alt="watermark"
            className="w-[70vw] z-50 opacity-[0.02]"
          />
        </div> */}
        {children}
      </body>
    </html>
  );
}
