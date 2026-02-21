
import Navbar from "../../Components/Navbar";
import Sidebar  from "../../Components/Sidebar";

export const metadata = {
  title: "Donote",
  icons: {
    icon: "/icon/bran.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Navbar />

        <Sidebar />
        {children}
      </body>
    </html>
  );
}