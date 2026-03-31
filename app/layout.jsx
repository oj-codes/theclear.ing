import "./globals.css";

export const metadata = {
  title: "Jóga — Structure & Shape",
  description: "A time-coded reading of Björk's Jóga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
