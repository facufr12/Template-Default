import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: "Medicals",
  description: "Generado por Facu.f",

  
    icons: {
      icon: ['/favicon.ico'],
     
    },
  
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
