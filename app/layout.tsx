import "../styles/custom.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "Created with Next.js and Bootstrap",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="container mt-4">{children}</div>
            </body>
        </html>
    );
}
