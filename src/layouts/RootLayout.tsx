import Footer from "../components/build/Footer";
import Header from "../components/build/Header";

export default function RootLayout({ children }: any) {
  return (
    <div>
      {/* <App /> */}
      <Header/>
      {children}
      {/* <Footer/> */}
    </div>
  );
}

// function App() {
//   return (
//     <main className=" font-inter">
//       <h1 className="text-3xl font-bold underline">Fasco Ecommerce</h1>
//     </main>
//   );
// }
