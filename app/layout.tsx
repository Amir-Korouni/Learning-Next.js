import "@/app/ui/global.css";
import { playfair } from "./ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased bg-zinc-400`}>
        {children}
      </body>
    </html>
  );
}
