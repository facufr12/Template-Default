import { config } from "./config"; // Ajusta la ruta según donde guardes el archivo
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: config.title,
  description: config.description,
  icons: {
    icon: [config.favicon],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content={config.themeColor} />
      <body
        style={{
          fontFamily: config.fontFamily,
        }}
      >
        {children}
      </body>
    </html>
  );
}
