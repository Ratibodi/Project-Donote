import "./globals.css";
import ClientLayout from "./ClientLayout/ClientLayout";

export const metadata = {
  title: "Donote",
  icons: {
    icon: "/icon/Donote.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

