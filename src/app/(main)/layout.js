
import Navbar from "../../components/Navbar";
import Sidebar  from "../../components/Sidebar";

export const metadata = {
  title: "Donote",
  icons: {
    icon: "/icon/bran.png",
  },
};
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
}