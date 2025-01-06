import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "URL Shortener",
	description: "Short but sweet",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<link rel="shortcut icon" href="/icon/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
				<link rel="icon" href="https://logosandtypes.com/wp-content/uploads/2020/08/sas.svg"/>
				<link rel="manifest" href="/icon/site.webmanifest"/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
