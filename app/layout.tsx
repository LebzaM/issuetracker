import './globals.css';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './Sidebar';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Sidebar>
        <main className="px-5">{children}</main>
        </Sidebar>
      </body>
    </html>
  );
}
