import { config } from "./config"; 
import "./globals.css";


  /* Para configurar estas variables ir al config.js */


export const metadata = {
  title: config.title,
  description: config.description,
  icons: {
    icon: [config.favicon]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content={config.themeColor} />
      <body
        style={{
          fontFamily: config.fontFamily
        }}
      >
        {children}
      </body>
    </html>
  );
}
