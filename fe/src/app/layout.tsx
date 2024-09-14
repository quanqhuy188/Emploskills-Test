import {Inter} from "next/font/google"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/globals.css";


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
        <ToastContainer />
      </body>
    </html>
  );
}
