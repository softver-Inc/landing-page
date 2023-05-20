import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Title from "@/components/Title";
import Waves from "@/components/Wave";
export default function Home() {
  return (
    <div className="w-full h-full">
      <Waves />
      <Navbar />
      <div>
        <div className="flex flex-row w-full my-60 xl:my-96  justify-center ">
          <div className="flex flex-col relative lg:-top-60 4xl:-top-36 ">
            <img src="/horizontal.svg" className="w-64 sm:w-[35em] mb-10" />
            <Title />
          </div>
          <div className="container__vector hidden sm:block">
            <img src="/icon.svg" className="2xl:w-[35em] 2xl:h-[35em] w-96" />
          </div>
        </div>
        <div className="w-screen sm:h-screen relative mb-56">
          <Services />
        </div>
        <div className="w-11/12 flex flex-col items-center justify-center h-screen">
          <div className="flex w-full justify-center items-center  h-screen">
            <div className="flex z-50">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
