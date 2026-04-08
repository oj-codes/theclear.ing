import "./globals.css";

export const metadata = {
  title: {
    default: "in the clearing",
    template: "%s · in the clearing",
  },
  description: "a clearing for things being made.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
