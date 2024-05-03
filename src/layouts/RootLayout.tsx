import Footer from "../components/build/Footer";
import Header from "../components/build/Header";

export default function RootLayout({ children }: any) {
  return (
    <main className=" font-inter">
      <Header/>
      {children}
      <Footer/>
    </main>
  );
}
