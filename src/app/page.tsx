import About from "@/components/About";
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
        <div className="flex flex-row w-full my-60  justify-center items-center">
          <div className="flex flex-col relative lg:-top-60 4xl:-top-36 ">
            <img
              src="/horizontal.svg"
              alt="logo"
              className="w-64 sm:w-[35em] mb-10"
            />
            <Title />
          </div>
          <div className="container__vector hidden sm:block">
            <img
              src="/icon.svg"
              alt="illutracion"
              className="2xl:w-[35em] 2xl:h-[35em] w-96"
            />
          </div>
        </div>

        <div className="w-screen sm:h-screen relative ">
          <Services />
        </div>
        <div className="my-[32rem] h-screen flex items-center justify-center">
          <About />
        </div>
        <div className="relative w-screen flex flex-col items-center justify-center h-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            className="absolute w-[160vw]"
          >
            <path d="M0 50 A50 50 0 0 1 100 50 H0 Z" fill="#f3f4f6" />
          </svg>

          <div className="flex w-full justify-center items-center h-screen overflow-hidden">
            <div className="flex z-50">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30%]">
        <Footer />
      </div>
    </div>
  );
}
