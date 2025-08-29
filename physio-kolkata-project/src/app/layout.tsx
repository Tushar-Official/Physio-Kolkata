
import "./globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['400','700'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
