import Desc from "./components/Desc";
import Form from "./components/Form";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className=" bg-white text-black ">
      <Header />
      <Desc />
      <Form />
    </main>
  );
}
