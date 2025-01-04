import NavList from './(navBar)/NavComponents/NavList';
import Footer from '../components/footer/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen ">
          <NavList />
          <main className="flex-grow self-center h-[calc(90vh)]">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
