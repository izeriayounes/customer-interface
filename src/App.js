import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import LoginPage from "./pages/Login";

function App() {
  const isAuth = false;
  const isCustomer = true;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar isAuth={isAuth} isCustomer={isCustomer} />
        {!isAuth && <LoginPage />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
