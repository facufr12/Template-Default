import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Nombre Prepaga",
  description: "Generado por Facu.f",

  icons: {
    icon: ["/nombrefavion.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#E82E8A" />
      <body
        style={{
          fontFamily: "'Acumin Variable Concept ExtraCo', Arial, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
