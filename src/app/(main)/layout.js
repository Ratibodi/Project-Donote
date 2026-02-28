
import Navbar from "../../components/Navbar";
import Sidebar  from "../../components/Sidebar";

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