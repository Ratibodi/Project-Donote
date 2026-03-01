
import "./globals.css";

export const metadata = {
    title: "Donote",
    icons: {
    icon: "/icon/bran.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
