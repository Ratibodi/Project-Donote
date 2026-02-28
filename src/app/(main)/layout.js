
import Navbar from "@/components/Sidebar";
import Sidebar  from "@/components/Navbar";

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