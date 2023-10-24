import { Header } from "../components/Header/header"
import { Footer } from "../components/Footer/footer"
import { Outlet } from "react-router-dom";




export function LayoutBase() {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
      
      <Footer />
     
    </>
  );
}

      