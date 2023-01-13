import React from "react";
import { CarouselMain } from "./component/carousel/CarouselMain";
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/header/Header";
import { Main1 } from "./component/main1/Main1";
import { Nosotros } from "./component/main2/Nosotros";
import { Main3 } from "./component/main3/Main3";
import IconoWhatsapp from "./component/whatsapp/iconoWhatsapp";

function App() {
  return (
    <>
      <header>
        <Header />
        <IconoWhatsapp />
      </header>

      <main>
        <Nosotros />
        <Main3 />
        <CarouselMain />
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
}

export default App;
