import "./App.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <NavBar />
      <Button>Click me</Button>
      <Footer />
    </>
  );
}

export default App;
