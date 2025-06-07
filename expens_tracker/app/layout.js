import { Inter } from "next/font/google";
import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "expenseTracker_using_AI",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
         
          <main className="min-h-screen">{children}</main>
          

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by AmnaCoder</p>
            </div>
          </footer>
        </body>
      </html>
    
  );
}