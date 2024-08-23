import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Mi tienda con Nextjs - HomePage",
  description: "Esta es la pagina principal de mi tienda",
  keywords: ["tienda", "online"],
};

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
