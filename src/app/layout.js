import Navbar from "@/components/navbar/navbar";
import "../styles/globals.css";

export const metadata = {
  title: "TugasPMW",
  description: "D121211018 - Mohammad Aqsha Arianto Latif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
