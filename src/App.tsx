import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui";
import LoginPage from "./views/authentication_page/login/login";
import Register from "./views/authentication_page/register/register";

function App() {
  return (
    <div className="">
      <NavBar />
      <LoginPage />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
