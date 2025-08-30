
import "./globals.css";

export const metadata = {
  title: "DavinciWall — Portfolio",
  description: "Creative AI specialist portfolio by Davinci",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
