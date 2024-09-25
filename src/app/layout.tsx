import "./globals.css";

export const metadata = {
  title: "Jose Enriquez - Portfolio",
  description: "Jose Carlos Enriquez Dominguez Portfolio",
  keywords: [
    "React Developer",
    "Web Developer",
    "Full Stack",
    "NodeJS",
    "NextJS",
    "Front End",
    "Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body> {children}</body>
    </html>
  );
}
