import About from "@/components/About";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div>
        <div className="flex h-screen w-full items-center justify-center">
          <Title />
        </div>
        <div className="flex w-full justify-center items-center  h-screen">
          <div className="flex items-stretch">
            <About />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
