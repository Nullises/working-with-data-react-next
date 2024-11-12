import "bootstrap/dist/css/bootstrap.css";
import "/styles/site.css";
import "/styles/fontawesome/css/all.css";
import "/styles/roboto/roboto.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
